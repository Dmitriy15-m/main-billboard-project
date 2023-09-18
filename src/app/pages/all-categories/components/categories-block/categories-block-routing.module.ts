import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesBlockComponent } from './categories-block.component';

const routes: Routes = [{ path: '', component: CategoriesBlockComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesBlockRoutingModule {}
