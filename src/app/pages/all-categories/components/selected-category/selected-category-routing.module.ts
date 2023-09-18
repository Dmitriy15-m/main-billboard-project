import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectedCategoryComponent } from './selected-category.component';


const routes: Routes = [{ path: '', component: SelectedCategoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedCategoryRoutingModule {}
