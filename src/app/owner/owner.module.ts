import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../../../src/material.module';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component'

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ]
})
export class OwnerModule { }
