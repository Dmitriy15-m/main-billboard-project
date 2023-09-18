import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'item-card-page',
    loadChildren: () =>
      import('./pages/item-card-page/item-card-page.module').then(
        (m) => m.ItemCardPageModule
      ),
  },
  {
    path: 'auth-page',
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  },

  {
    path: 'all-categories',
    loadChildren: () =>
      import('./pages/all-categories/all-categories.module').then(
        (m) => m.AllCategoriesModule
      ),
  },

  {
    path: 'all-categories/:id',
    loadChildren: () =>
      import('./pages/all-categories/all-categories.module').then(
        (m) => m.AllCategoriesModule
      ),
  },

  {
    path: 'new-ad',
    loadChildren: () =>
      import('./pages/new-ad-form/new-ad-form.module').then(
        (m) => m.NewAdFormModule
      ),
  },
  {
    path: 'profile-settings',
    loadChildren: () =>
      import('./pages/profile-settings/profile-setting.module').then(
        (m) => m.ProfileSettingModule
      ),
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
