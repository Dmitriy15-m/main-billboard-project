import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/components/header/header.component';
import { AuthorizationModule } from './core/components/header/components/auth-top/authorization/authorization.module';
import { AuthComponent } from './core/components/header/components/auth-top/auth.component';
import { SearchInputComponent } from './core/components/header/components/search-bottom/components/search-input/search-input.component';
import { SearchComponent } from './core/components/header/components/search-bottom/search.component';
import { CategoriesBtnComponent } from './core/components/header/components/search-bottom/components/categories-btn/categories-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    CategoriesBtnComponent,
    SearchInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
