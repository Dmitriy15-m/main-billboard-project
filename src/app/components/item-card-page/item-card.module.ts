import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescComponent } from './desc/desc.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [GalleryComponent, DescComponent],
  imports: [CommonModule],
  exports: [GalleryComponent, DescComponent]
})
export class ItemCardModule {}
