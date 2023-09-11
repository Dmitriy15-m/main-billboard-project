import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescComponent } from './components/desc/desc.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ItemCardPageComponent } from './item-card-page.component';
import { BreadcrumbsModule } from '../shared/breadcrumbs/breadcrumbs.module';




@NgModule({
  declarations: [DescComponent, GalleryComponent, ItemCardPageComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports: [
    DescComponent, GalleryComponent, ItemCardPageComponent
  ]
})
export class ItemCardPageModule { }
