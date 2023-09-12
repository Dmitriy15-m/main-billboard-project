import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescComponent } from './components/desc/desc.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ItemCardPageComponent } from './item-card-page.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [DescComponent, GalleryComponent, ItemCardPageComponent],
  imports: [CommonModule, BreadcrumbsComponent],
  exports: [DescComponent, GalleryComponent, ItemCardPageComponent],
})
export class ItemCardPageModule {}
