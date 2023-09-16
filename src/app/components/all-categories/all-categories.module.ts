import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './all-categories.component';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';
import { SelectedCategoryComponent } from './components/selected-category/selected-category.component';
import { SelectedCategoryTitleComponent } from './components/selected-category/components/selected-category-title/selected-category-title.component';
import { SelectedSubCategoriesComponent } from './components/selected-category/components/selected-sub-categories/selected-sub-categories.component';
import { SubCategoryComponent } from './components/selected-category/components/selected-sub-categories/components/sub-category/sub-category.component';
import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { CategoryItemComponent } from '../shared/category-item/category-item.component';

@NgModule({
  declarations: [
    AllCategoriesComponent,
    CategoriesBlockComponent,
    SelectedCategoryComponent,
    SelectedCategoryTitleComponent,
    SelectedSubCategoriesComponent,
    SubCategoryComponent,
  ],
  imports: [CommonModule, AllCategoriesRoutingModule,CategoryItemComponent],
  exports: [AllCategoriesComponent],
})
export class AllCategoriesModule {}
