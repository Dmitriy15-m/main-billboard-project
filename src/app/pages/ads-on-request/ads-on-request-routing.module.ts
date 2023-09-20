import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdsOnRequestComponent } from './ads-on-request.component';

const routes: Routes = [{
  path: '', component: AdsOnRequestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdsOnRequestRoutingModule { }
