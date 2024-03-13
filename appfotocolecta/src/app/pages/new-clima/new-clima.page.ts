import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-clima',
  templateUrl: './new-clima.page.html',
  styleUrls: ['./new-clima.page.scss'],
})
export class NewClimaPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }
async close(){
  await this.modalCtrl.dismiss();
}
titulo= 'Agregar clima';
}
