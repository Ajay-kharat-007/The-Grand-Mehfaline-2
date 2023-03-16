import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService,
    private toastr : ToastrService
  ) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    password: this.builder.control('', Validators.required),
  });

  proceedRegister() {
    if(this.registerForm.valid) {
      this.service.registerAdmin(this.registerForm.value).subscribe((res:any)=>{
        console.log(res)
        this.toastr.success("congratulations !! you have registered successfully !!", "Registerd successfully")
        this.router.navigateByUrl('/admin/login')
      })
    }else {
      this.toastr.warning("please enter valid data ")
    }
  }

}
