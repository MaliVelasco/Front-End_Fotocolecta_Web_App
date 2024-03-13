import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-new-municipio',
  templateUrl: './new-municipio.page.html',
  styleUrls: ['./new-municipio.page.scss'],
})
export class NewMunicipioPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async close(){
    await this.modalCtrl.dismiss();
  }

  titulo= 'Agregar Municipio';
}
