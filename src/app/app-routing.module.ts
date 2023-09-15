import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';




// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { MainComponent } from './pages/main/main.component';
// import { LkComponent } from './pages/lk/lk.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'main',
//     pathMatch: 'full',
//   },
//   {
//     path: 'main',
//     title: 'Главная',
//     loadChildren: () =>
//       import('./pages/main/main.module').then((m) => m.MainModule),
//   },

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'catalog',
  //   pathMatch: 'full',
  // },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
