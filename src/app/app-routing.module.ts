import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/catalog/catalog.module').then(
        (m) => m.CatalogModule
      ),
  },
  {
    path: 'item-card-page',
    loadChildren: () =>
      import('./components/item-card-page/item-card-page.module').then(
        (m) => m.ItemCardPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
