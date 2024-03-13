import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewMunicipioPage } from '../new-municipio/new-municipio.page';
import { NewClimaPage } from '../new-clima/new-clima.page';
import { NewRegionPage } from '../new-region/new-region.page';

@Component({
  selector: 'app-new-specie',
  templateUrl: './new-specie.page.html',
  styleUrls: ['./new-specie.page.scss'],
})
export class NewSpeciePage implements OnInit {
  imgSpecie = './assets/add.png';
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }


  async openNewMnicipio() {
    const modal = await this.modalCtrl.create({
      component: NewMunicipioPage,
      mode: 'ios',
      initialBreakpoint: .5,
      backdropDismiss: false,
    });
    await modal.present();
  }
  async openNewClima(){
    const modal = await this.modalCtrl.create({
      component: NewClimaPage,
      mode: 'ios',
      initialBreakpoint: .5,
      backdropDismiss:false,
    });
    await modal.present();
  }
  async openNewRegion(){
    const modal = await this.modalCtrl.create({
      component: NewRegionPage,
      mode: 'ios',
      initialBreakpoint: .5,
      backdropDismiss:false,
    });
    await modal.present();
  }

  async close() {
    await this.modalCtrl.dismiss();
  }
  simButton(){
    console.log('Se ha guardado correctamente')
  }

   titulo= 'Agregar Especie';

}
