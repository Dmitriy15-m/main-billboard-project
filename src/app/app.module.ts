import { ErrorComponent } from './components/error/error.component';
import { AuthComponent } from './components/header/auth-top/auth.component';
import { SearchComponent } from './components/header/search-bottom/search.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogModule } from './components/catalog/catalog.module';
import { ItemCardModule } from './components/shared/item-card/item-card.module';
import { ItemCardPageModule } from './components/item-card-page/item-card-page.module';
import { AuthorizationModule } from './components/header/auth-top/authorization/authorization.module';
import { AllCategoriesComponent } from './components/header/all-categories/all-categories.component';
import { CategoriesBtnComponent } from './components/header/search-bottom/categories-btn/categories-btn.component';
import { SearchInputComponent } from './components/header/search-bottom/search-input/search-input.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    ErrorComponent,
    AllCategoriesComponent,
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
    AuthorizationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
