import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewAdFormComponent } from './new-ad-form.component';

const routes: Routes = [{ path: '', component: NewAdFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAdFormComponentRouting{}
