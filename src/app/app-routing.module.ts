import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsPageComponent } from './pages/items-page/items-page.component';
import { ItemCardPageComponent } from './pages/item-card-page/item-card-page.component';

const routes: Routes = [
  { path: '', component: ItemsPageComponent },
  { path: 'item-card-page', component: ItemCardPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
