import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr'

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
    private toastr: ToastrService
  ) { }

  result: any;

  loginForm = this.builder.group({
    id: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  })

  proceedLogin() {
    if (this.loginForm.valid) {
      this.service.getUserByCode(this.loginForm.value.id).subscribe(item => {
        this.result = item;
        if (this.result.password === this.loginForm.value.password) {
          this.router.navigateByUrl('/user/login');
          this.toastr.success('login Successfull')
        } else if (this.result.password !== this.loginForm.value.password) {
          this.toastr.error("Please check the password", 'Wrong Password')
        }
      })
    } else if (this.loginForm.value) {
      this.toastr.warning("Please Enter Something in fields")
    }
  }

}
