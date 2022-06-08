import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInitComponent } from './auth-init/auth-init.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({
  declarations: [
    AuthInitComponent,
    ResetPasswordComponent,
    SignInComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
