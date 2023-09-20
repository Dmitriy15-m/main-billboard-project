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
import { CategoryItemComponent } from './shared/category-item/category-item.component';
import { CategoriesBlockComponent } from './core/components/categories/components/categories-block/categories-block.component';
import { SelectedCategoryTitleComponent } from './core/components/categories/components/selected-category/components/selected-category-title/selected-category-title.component';
import { SelectedSubCategoriesComponent } from './core/components/categories/components/selected-category/components/selected-sub-categories/selected-sub-categories.component';
import { SubCategoryComponent } from './core/components/categories/components/selected-category/components/selected-sub-categories/components/sub-category/sub-category.component';
import { CategoriesComponent } from './core/components/categories/categories.component';
import { SelectedCategoryComponent } from './core/components/categories/components/selected-category/selected-category.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SearchComponent,
    CategoriesBtnComponent,
    SearchInputComponent,
    CategoriesComponent,
    CategoriesBlockComponent,
    SelectedCategoryTitleComponent,
    SelectedSubCategoriesComponent,
    SubCategoryComponent,
    SelectedCategoryComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationModule,
    CategoryItemComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
