import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr : ToastrService
  ){}

  result:any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin(){
    if(this.loginForm.valid){
      this.service.getUserByCode(this.loginForm.value.id).subscribe((res)=>{
        this.result = res;
        if(this.result.password === this.loginForm.value.password){
          sessionStorage.setItem('username', this.result.id);
          sessionStorage.setItem('pass', this.result.password);
          this.router.navigateByUrl('/owner/home')
          this.toastr.success(`welcome ${this.result.id}`,'Login Successfully !!')
        } else {
          this.toastr.error('Invalid Password')
        }
      });
    }else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
