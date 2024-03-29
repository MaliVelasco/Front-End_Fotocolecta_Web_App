import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }

  titulo= 'Galeria';
}