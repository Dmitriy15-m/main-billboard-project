import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { AllCategoriesComponent } from './all-categories.component';
import { SelectedCategoryTitleComponent } from './components/selected-category/components/selected-category-title/selected-category-title.component';
import { SelectedSubCategoriesComponent } from './components/selected-category/components/selected-sub-categories/selected-sub-categories.component';
import { SubCategoryComponent } from './components/selected-category/components/selected-sub-categories/components/sub-category/sub-category.component';

@NgModule({
  declarations: [
    AllCategoriesComponent,
    CategoriesBlockComponent,
    SelectedCategoryComponent,
    SelectedCategoryTitleComponent,
    SelectedSubCategoriesComponent,
    SubCategoryComponent,
  ],
  imports: [CommonModule],
  exports: [
    AllCategoriesComponent,
    CategoriesBlockComponent,
    SelectedCategoryComponent,
  ],
})
export class AllCategoriesModule {}
