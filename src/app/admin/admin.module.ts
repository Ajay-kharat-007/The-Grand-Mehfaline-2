import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import {MaterialModule} from '../../../src/material.module';
import {ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http'
import { ToastrModule} from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { OwnersComponent } from './owners/owners.component';
import { UpdateOwnerComponent } from './update-owner/update-owner.component'


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OwnersComponent,
    UpdateOwnerComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ]
})
export class AdminModule { }
