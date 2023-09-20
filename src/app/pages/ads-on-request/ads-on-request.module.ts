import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsOnRequestRoutingModule } from './ads-on-request-routing.module';
import { AdsOnRequestComponent } from './ads-on-request.component';
import { ItemCardComponent } from 'src/app/shared/item-card/item-card.component';
import { FoundAdsComponent } from './components/found-ads/found-ads.component';
import { CategoriesPriceBlockComponent } from './components/categories-price-block/categories-price-block.component';
import { PriceComponent } from './components/categories-price-block/components/price/price.component';
import { RequestItemComponent } from 'src/app/shared/request-item/request-item.component';

@NgModule({
  declarations: [
    AdsOnRequestComponent,
    FoundAdsComponent,
    CategoriesPriceBlockComponent,
    PriceComponent,
  ],
  imports: [
    CommonModule,
    AdsOnRequestRoutingModule,
    ItemCardComponent,
    RequestItemComponent,
  ],
})
export class AdsOnRequestModule {}
