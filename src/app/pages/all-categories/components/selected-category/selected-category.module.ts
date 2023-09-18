import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectedSubCategoriesComponent } from './components/selected-sub-categories/selected-sub-categories.component';
import { SubCategoryComponent } from './components/selected-sub-categories/components/sub-category/sub-category.component';
import { SelectedCategoryComponent } from './selected-category.component';
import { SelectedCategoryTitleComponent } from './components/selected-category-title/selected-category-title.component';
import { SelectedCategoryRoutingModule } from './selected-category-routing.module';

@NgModule({
  declarations: [
    SelectedCategoryComponent,
    SelectedCategoryTitleComponent,
    SelectedSubCategoriesComponent,
    SubCategoryComponent,
  ],
  imports: [CommonModule, SelectedCategoryRoutingModule ],
  exports: [
    SelectedCategoryComponent,
    SelectedCategoryTitleComponent,
    SelectedSubCategoriesComponent,
    SubCategoryComponent,
  ],
})
export class SelectedCategoryModule {}
