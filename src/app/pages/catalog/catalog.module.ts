import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { NewAdComponent } from 'src/app/shared/new-ad/new-ad.component';
import { ItemCardComponent } from 'src/app/shared/item-card/item-card.component';

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
