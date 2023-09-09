import { ErrorComponent } from './components/error/error.component';

import { SearchComponent } from './components/header/search/search.component';
import { AuthModule } from './components/header/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { ItemCardPageComponent } from './components/item-card-page/item-card-page.component';
import { GalleryComponent } from './components/item-card-page/gallery/gallery.component';
import { DescComponent } from './components/item-card-page/desc/desc.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    ItemCardPageComponent,
    ErrorComponent,
    GalleryComponent,
    DescComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CatalogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
