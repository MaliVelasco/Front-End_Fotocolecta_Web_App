import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewClimaPage } from './new-clima.page';

const routes: Routes = [
  {
    path: '',
    component: NewClimaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewClimaPageRoutingModule {}
