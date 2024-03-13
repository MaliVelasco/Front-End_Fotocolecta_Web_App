import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NewSpeciePageRoutingModule } from './new-specie-routing.module';
import { NewSpeciePage } from './new-specie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewSpeciePageRoutingModule
  ],
  declarations: [NewSpeciePage]
})
export class NewSpeciePageModule {}
