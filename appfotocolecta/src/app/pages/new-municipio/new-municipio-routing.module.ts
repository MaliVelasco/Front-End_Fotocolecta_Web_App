import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewMunicipioPage } from './new-municipio.page';

const routes: Routes = [
  {
    path: '',
    component: NewMunicipioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewMunicipioPageRoutingModule {}
