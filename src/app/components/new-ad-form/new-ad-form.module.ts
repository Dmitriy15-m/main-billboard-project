import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdFormComponent } from './new-ad-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';



@NgModule({
  declarations: [ NewAdFormComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ NewAdFormComponent, FormComponent]
})
export class NewAdFormModule { }
