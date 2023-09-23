import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { CategoriesComponent } from './core/dropdown-categories/categories.component';

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
    path: 'catalog/:id',
    title: 'Мои объявления',
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
    path: 'registration-page',
    title: 'Регистрация',
    loadChildren: () => import('./pages/registration-page/registration-page.module').then(
      m => m.RegistrationPageModule
    )
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
  {
    path: 'ads-on-request',
    title: 'Объявления по запросу',
    loadChildren: () =>
      import('./pages/ads-on-request/ads-on-request.module').then(
        (m) => m.AdsOnRequestModule
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
