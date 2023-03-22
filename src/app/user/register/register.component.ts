import { ConstantPool } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: AuthService
  ) { }

  registerForm = this.builder.group({
    id: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    firstname: this.builder.control('', Validators.required),
    lastname: this.builder.control('', Validators.required),
    phone: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(10)])),
    email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    password: this.builder.control('', Validators.required)
  });

  proceedRegister() {
    this.service.postUsers(this.registerForm.value).subscribe((res)=>{
      console.log(res)
      this.router.navigateByUrl('/owner/login')
    })
  }

}
