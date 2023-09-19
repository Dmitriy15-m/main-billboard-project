import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './all-categories.component';
import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { SelectedCategoryModule } from './components/selected-category/selected-category.module';
import { CategoryItemComponent } from 'src/app/shared/category-item/category-item.component';
import { CategoriesBlockComponent } from './components/categories-block/categories-block.component';

@NgModule({
  declarations: [
    AllCategoriesComponent,
    // CategoriesBlockComponent
  ],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule,
    SelectedCategoryModule,
    CategoryItemComponent
  ],
  exports: [AllCategoriesComponent],
})
export class AllCategoriesModule {}
