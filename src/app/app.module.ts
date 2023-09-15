import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorizationModule } from './components/header/components/auth-top/authorization/authorization.module';
import { AuthComponent } from './components/header/components/auth-top/auth.component';
import { SearchInputComponent } from './components/header/components/search-bottom/components/search-input/search-input.component';
import { SearchComponent } from './components/header/components/search-bottom/search.component';
import { CategoriesBtnComponent } from './components/header/components/search-bottom/components/categories-btn/categories-btn.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    AuthorizationModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
