import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewClimaPageRoutingModule } from './new-clima-routing.module';

import { NewClimaPage } from './new-clima.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewClimaPageRoutingModule
  ],
  declarations: [NewClimaPage]
})
export class NewClimaPageModule {}
