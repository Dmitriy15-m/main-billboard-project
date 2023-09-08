import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemCardPageComponent } from './pages/item-card-page/item-card-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/header/search/search.component';
import { AuthModule } from './components/header/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    ItemCardComponent,
    ItemsPageComponent,
    ErrorComponent,
    ItemCardPageComponent,
    HeaderComponent,
    SearchComponent
   ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,AuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
