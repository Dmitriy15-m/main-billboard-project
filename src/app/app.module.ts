import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { ItemCardModule } from './components/shared/item-card/item-card.module';
import { ItemCardPageModule } from './components/item-card-page/item-card-page.module';
import { AuthorizationModule } from './components/header/components/auth-top/authorization/authorization.module';
import { AuthComponent } from './components/header/components/auth-top/auth.component';import { SearchInputComponent } from './components/header/components/search-bottom/components/search-input/search-input.component';
import { SearchComponent } from './components/header/components/search-bottom/search.component';
import { CategoriesBtnComponent } from './components/header/components/search-bottom/components/categories-btn/categories-btn.component';
import { AllCategoriesModule } from './components/all-categories/all-categories.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    ErrorComponent,
    CategoriesBtnComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CatalogModule,
    ItemCardModule,
    ItemCardPageModule,
    AuthorizationModule,
    AllCategoriesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
