import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewSpeciesPageRoutingModule } from './view-species-routing.module';

import { ViewSpeciesPage } from './view-species.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewSpeciesPageRoutingModule
  ],
  declarations: [ViewSpeciesPage]
})
export class ViewSpeciesPageModule {}
