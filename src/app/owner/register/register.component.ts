import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder, 
    private router : Router,
    private service : AuthService,
    private toastr : ToastrService
  ){}

  registerForm = this.builder.group({
    id : this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name : this.builder.control('', Validators.required),
    phone : this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10)])),
    email : this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender : this.builder.control('male'),
    password : this.builder.control('', Validators.required),
  });

  proceedRegister() {
    console.log(this.registerForm.value)
    if(this.registerForm.valid) {
      this.service.registerOwner(this.registerForm.value).subscribe((res)=>{
        this.toastr.success('Registered Successfully !!')
        this.router.navigateByUrl('/owner/login')
      });
    }else {
      this.toastr.warning("please enter valid data ")
    }
  }

}
