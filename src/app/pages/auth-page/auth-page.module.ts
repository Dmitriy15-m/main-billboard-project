import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPageRoutingModule } from './auth-page-routing.module';
import { AuthPageComponent } from './auth-page.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthorizationFormComponent } from './components/authorization-form/authorization-form.component';


@NgModule({
  declarations: [
    AuthPageComponent,
    RegistrationFormComponent,
    AuthorizationFormComponent
  ],
  imports: [
    CommonModule,
    AuthPageRoutingModule,
  ],
  exports: [
    AuthPageComponent,
  ]
})
export class AuthPageModule { }
