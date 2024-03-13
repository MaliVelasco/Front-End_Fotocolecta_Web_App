import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRegionPageRoutingModule } from './new-region-routing.module';

import { NewRegionPage } from './new-region.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRegionPageRoutingModule
  ],
  declarations: [NewRegionPage]
})
export class NewRegionPageModule {}
