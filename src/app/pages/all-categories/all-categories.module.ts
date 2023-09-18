import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCategoriesComponent } from './all-categories.component';
import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { CategoriesBlockModule } from './components/categories-block/categories-block.module';
import { SelectedCategoryModule } from './components/selected-category/selected-category.module';

@NgModule({
  declarations: [
    AllCategoriesComponent,
  ],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule,
    CategoriesBlockModule,
    SelectedCategoryModule
  ],
  exports: [AllCategoriesComponent],
})
export class AllCategoriesModule {}
