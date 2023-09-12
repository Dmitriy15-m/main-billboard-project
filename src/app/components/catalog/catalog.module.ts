import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { NewAdComponent } from '../shared/new-ad/new-ad.component';
import { ItemCardComponent } from '../shared/item-card/item-card.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [CommonModule, NewAdComponent, ItemCardComponent],
  exports: [CatalogComponent],
})
export class CatalogModule {}
