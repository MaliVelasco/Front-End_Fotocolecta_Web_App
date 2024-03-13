import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewSpeciesPage } from './view-species.page';

const routes: Routes = [
  {
    path: '',
    component: ViewSpeciesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewSpeciesPageRoutingModule {}
