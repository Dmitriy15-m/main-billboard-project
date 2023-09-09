import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { ItemCardModule } from '../shared/item-card/item-card.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, ItemCardModule],
  exports: [CatalogComponent],
})
export class CatalogModule {}
