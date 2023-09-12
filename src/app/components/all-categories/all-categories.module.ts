import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';



@NgModule({
  declarations: [
    CategoriesBlockComponent,
    SelectedCategoryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AllCategoriesModule { }
