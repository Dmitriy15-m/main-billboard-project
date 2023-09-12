import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { AllCategoriesComponent } from './all-categories.component';

@NgModule({
  declarations: [AllCategoriesComponent,CategoriesBlockComponent, SelectedCategoryComponent],
  imports: [CommonModule],
  exports: [AllCategoriesComponent,CategoriesBlockComponent, SelectedCategoryComponent],
})
export class AllCategoriesModule {}
