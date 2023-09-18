import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesBlockRoutingModule } from './categories-block-routing.module';
import { CategoriesBlockComponent } from './categories-block.component';
import { CategoryItemComponent } from 'src/app/components/shared/category-item/category-item.component';

@NgModule({
  declarations: [CategoriesBlockComponent],
  imports: [CommonModule, CategoriesBlockRoutingModule, CategoryItemComponent],
  exports: [CategoriesBlockComponent]
})
export class CategoriesBlockModule {}
