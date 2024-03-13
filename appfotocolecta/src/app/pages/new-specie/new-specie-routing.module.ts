import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewSpeciePage } from './new-specie.page';

const routes: Routes = [
  {
    path: '',
    component: NewSpeciePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewSpeciePageRoutingModule {}
