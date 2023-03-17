import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../../../src/material.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ToastrModule} from 'ngx-toastr';
import { BookingFormComponent } from './booking-form/booking-form.component'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BookingFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class UserModule { }
