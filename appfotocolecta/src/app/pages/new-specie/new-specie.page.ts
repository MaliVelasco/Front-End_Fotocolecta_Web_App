import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewMunicipioPage } from '../new-municipio/new-municipio.page';
import { NewClimaPage } from '../new-clima/new-clima.page';
import { NewRegionPage } from '../new-region/new-region.page';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-new-specie',
  templateUrl: './new-specie.page.html',
  styleUrls: ['./new-specie.page.scss'],
})
export class NewSpeciePage implements OnInit {

  titulo= 'Agregar Especie';
  imgSpecie = './assets/add.png';
  currentFile?: any[] = []; //imagen
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }

  constructor(
    private modalCtrl: ModalController,
    private compressImg: NgxImageCompressService, //imagen
  ) { }

  ngOnInit() {
  }

///Modals de aqui
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

  /// Hasta aqui

  async close() {
    await this.modalCtrl.dismiss();
  }
  simButton(){
    console.log('Se ha guardado correctamente')
  }

///funciones sobre la imagen de aqui
  dataURItoBlob(dataURI: any) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    var byteString = atob(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString })
  }

  imageSpecie(ev: any) {
    console.log(ev);
    this.compressImg.uploadFile().then(({ image, orientation }) => {
      this.generarURL(image);
      const blob = this.dataURItoBlob(image);
      this.currentFile![0] = blob;
    })
  }
  generarURL(image: any) { //solo genera la url para poder mostrarla
    const byteString = atob(image.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([ab], { type: '' });
    // Crear la URL de la imagen
    const imageUrl = URL.createObjectURL(blob);
    console.log(imageUrl);
    // Utilizar la URL de la imagen
    this.imgSpecie = imageUrl;
    document.getElementById("imgProd")?.setAttribute(
      'src', imageUrl);
    //this.formGroup.get('image').patchValue(imageUrl)
  }
///hasta aqui


}
