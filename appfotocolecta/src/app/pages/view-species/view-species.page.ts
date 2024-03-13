import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewSpeciePage } from '../new-specie/new-specie.page';
import { NewMunicipioPage } from '../new-municipio/new-municipio.page';

@Component({
  selector: 'app-view-species',
  templateUrl: './view-species.page.html',
  styleUrls: ['./view-species.page.scss'],
})
export class ViewSpeciesPage implements OnInit {
  species: any;
  alertButtons = ['Action'];
  constructor(
    private modalCtrl: ModalController,
  ) {
     // Simulando la obtención de los datos del administrador
     this.species = {
      imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAoAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQUGBAMCB//EADQQAAICAQIDBQYDCQAAAAAAAAABAgMEBRESIXEGMUFRYSIyQlKhwSOBsRMUMzVDYmNy8P/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oADAMBAAIRAxEAPwD9sABUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJAlKMI8U5KK82zlnqWHB7PIi36AdQOSGpYcttsiK67o6oTjNbwakvNPcCQSQAAAAAAAAAAAAAAACQIOHUtRhhx4YpSufdHy9WdOXfHGx52y+Fd3m/BGRutndbKyx7yk92wPu/JuyZ8V03J+vgeRAKgelGRbjy4qZyi/TuPMAabS9SjmLgntG5eHg+hYmLrnKucZwe0ovdM1mFkLKxoWrluua8mRce4AAAAAAAAAAAAASQSBS9o7toVU+ftP7FEWWvT4s9x392KRWlQAAAAAC67OXbStob8OJfcpTv0SfDqNa+ZNfQDTgAigAAAAAAAAAAAEgZXWf5ld+X6HEWGuw4dQlL54pleVAAAAAAOvSntqNH+xyHbo0OPUqf7d5AakAEUAAAAAAAAAAAAAVPaDFdtMb4pt18nt5Gf7zbNJpprdPvRS5uicUnPDlGP+OX2ZaijB024OVU/bon1S3/AEOdxkuTjJPoBAJUZPujLfoe1WFlWvaFE36tbL6geBfdn8VxjPJmveXDDp4s+MLRHup5cly+CPPfqy7jFRSUUkktkkFAAQAAAAAAAAAAAAAAkg48rU8XGbjKfHL5Yc2B2eJJQXa9a2/2NMIrw4uZzPV81/1YrpBCDUbvzBl46xnJ/wAVPrBHRVr1qf41UZLzXJgaAHDi6ri5Gy4v2c38M+X1O0AAAAAAAAAAAAAAk87rYU1uyySjFeLJtsjVXKdj2jFbtmW1DNnm27vlWvdj5Fg99Q1a3J4q6d66uvORW/8AbgCAACoAAgFhgapditRm3ZV8rfNdCvAGyx768ipWUzTi/oehk8DMswruOO7g/ejvyZqaLYXVxtg04yW6Ir7AAAAAAAABJ45Vyx8ey2XdBbgU2v5jnYsat+zHnP1ZTkylKcnKb3k3u2QUAAVAAEAAAAAALXQsx03fu85fhzfs+jKoc1zT2a7mBtgeGFesnFrt7nJc16+J7kUAAAAACs7QyawYxT5SsSf1AAzgAKgAAAAAAAAAAAAA0PZyTeJbF9ysW35pFqARQAAf/9k=", // Ruta de la foto de perfil
      name: 'mamifero prueba 1',
      descripcion: 'desxripcion uno',
      
    };
   }

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

  async close() {
    await this.modalCtrl.dismiss();
  }
  simButton(){
    console.log('Se ha guardado correctamente')
  }

   titulo= 'Ver todas las Especies';

}
