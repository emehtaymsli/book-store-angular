import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
