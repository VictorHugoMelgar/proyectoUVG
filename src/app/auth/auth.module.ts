import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//formularios
import {FormsModule}from '@angular/forms';
//http client
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    MaterialModule
  ]
})
export class AuthModule { }
