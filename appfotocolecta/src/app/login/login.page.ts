import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  
  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  async close() {
    await this.modalCtrl.dismiss();
  }
  simButton(){
    console.log('Sesion iniciada')
  }

   titulo= 'Login';

}