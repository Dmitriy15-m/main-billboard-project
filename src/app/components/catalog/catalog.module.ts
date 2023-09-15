import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { NewAdComponent } from '../shared/new-ad/new-ad.component';
import { ItemCardComponent } from '../shared/item-card/item-card.component';
import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    NewAdComponent,
    ItemCardComponent,
    CatalogRoutingModule,
  ],
  exports: [CatalogComponent],
})
export class CatalogModule {}
