import { ErrorComponent } from './components/error/error.component';

import { SearchComponent } from './components/header/search/search.component';
import { AuthModule } from './components/header/auth/auth.module';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { CatalogModule } from './components/catalog/catalog.module';
// import { ItemCardComponent } from './components/shared/item-card/item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    // ItemCardComponent,
    ItemsPageComponent,
    ErrorComponent,
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
