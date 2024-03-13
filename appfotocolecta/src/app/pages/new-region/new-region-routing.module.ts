import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewRegionPage } from './new-region.page';

const routes: Routes = [
  {
    path: '',
    component: NewRegionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewRegionPageRoutingModule {}
