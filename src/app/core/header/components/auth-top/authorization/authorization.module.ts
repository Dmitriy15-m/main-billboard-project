import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';
import { AuthorizedComponent } from './components/authorized/authorized.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AuthorizationComponent, AuthorizedComponent, UnauthorizedComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [AuthorizationComponent]
})
export class AuthorizationModule { }