import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { CategoriesComponent } from './core/components/categories/categories.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'catalog',
    pathMatch: 'full',
  },
  {
    path: 'catalog',
    title: 'Главная страница',
    loadChildren: () =>
      import('./pages/catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'item-card-page',
    title: 'Cтраница объявления',
    loadChildren: () =>
      import('./pages/item-card-page/item-card-page.module').then(
        (m) => m.ItemCardPageModule
      ),
  },
  {
    path: 'auth-page',
    title: 'Авторизация',
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  },
  {
    path: 'new-ad',
    title: 'Новое объявление',
    loadChildren: () =>
      import('./pages/new-ad-form/new-ad-form.module').then(
        (m) => m.NewAdFormModule
      ),
  },
  {
    path: 'profile-settings',
    title: 'Профиль',
    loadChildren: () =>
      import('./pages/profile-settings/profile-setting.module').then(
        (m) => m.ProfileSettingModule
      ),
  },
  { path: 'categories/:id', component: CategoriesComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
