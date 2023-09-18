import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCardPageComponent } from './item-card-page.component';


const routes: Routes = [{ path: '', component: ItemCardPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemCardPageRoutingModule {}
