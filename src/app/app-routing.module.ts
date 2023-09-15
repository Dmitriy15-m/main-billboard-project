import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
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
  {
    path: 'auth-page',
    loadChildren: () =>
      import('./components/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  },
  {
    path: 'all-categories',
    loadChildren: () =>
      import('./components/all-categories/all-categories.module').then(
        (m) => m.AllCategoriesModule
      ),
  },

  {
    path: 'new-ad',
    loadChildren: () =>
      import('./components/new-ad-form/new-ad-form.module').then(
        (m) => m.NewAdFormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
