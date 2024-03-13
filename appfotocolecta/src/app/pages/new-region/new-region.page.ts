import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-region',
  templateUrl: './new-region.page.html',
  styleUrls: ['./new-region.page.scss'],
})
export class NewRegionPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
  async close(){
    await this.modalCtrl.dismiss();
  }
  titulo= 'Agregar región';
}
