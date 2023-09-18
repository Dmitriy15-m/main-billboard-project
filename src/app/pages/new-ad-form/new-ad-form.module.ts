import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAdFormComponent } from './new-ad-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { NewAdFormComponentRouting } from './new-add-form-routing.module';

@NgModule({
  declarations: [ NewAdFormComponent, FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewAdFormComponentRouting
  ],
  exports: [ NewAdFormComponent, FormComponent]
})
export class NewAdFormModule { }
