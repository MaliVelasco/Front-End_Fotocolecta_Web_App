import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewMunicipioPageRoutingModule } from './new-municipio-routing.module';

import { NewMunicipioPage } from './new-municipio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewMunicipioPageRoutingModule
  ],
  declarations: [NewMunicipioPage]
})
export class NewMunicipioPageModule {}
