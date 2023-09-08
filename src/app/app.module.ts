import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ErrorComponent } from './components/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { ItemCardPageComponent } from './pages/item-card-page/item-card-page.component';
import { Header2Component } from './components/header2/header2.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemCardComponent,
    ItemsPageComponent,
    ErrorComponent,
    ItemCardPageComponent,
    Header2Component,
   ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
