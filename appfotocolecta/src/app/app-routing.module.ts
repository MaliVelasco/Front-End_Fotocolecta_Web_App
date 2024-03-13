import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login', 
    pathMatch: 'full'
  },
  {
    path: 'newSpecie',
    loadChildren: () => import('./pages/new-specie/new-specie.module').then( m => m.NewSpeciePageModule)
  },
  {
    path: '',
    redirectTo: 'newSpecie', 
    pathMatch: 'full'
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./publico/acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path:'',
    redirectTo: 'acerca-de',
    pathMatch: 'full'
  },
  {
    path: 'galeria',
    loadChildren: () => import('./publico/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: '',
    redirectTo: 'galeria',
    pathMatch: 'full'
  },
  {
    path: 'publicaciones',
    loadChildren: () => import('./publico/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule)
  },
  {
    path: '',
    redirectTo: 'publicaciones',
    pathMatch:'full'

  },
  {
    path: 'inicio',
    loadChildren: () => import('./publico/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { path: 'newMunicipio',
    loadChildren: () => import('./pages/new-municipio/new-municipio.module').then( m => m.NewMunicipioPageModule)
  },
  {
    path: '',
    redirectTo: 'newMunicipio', 
    pathMatch: 'full'
  },
  {
    path: 'perfil-admin',
    loadChildren: () => import('./pages/perfil-admin/perfil-admin.module').then( m => m.PerfilAdminPageModule)
  },
  {
    path:'',
    redirectTo:'perfil-admin',
    pathMatch:'full'
  },
  {
    path: '',
    redirectTo: 'perfil-admin',
    pathMatch: 'full'
  },
  {
    path: 'inicio-admin',
    loadChildren: () => import('./pages/inicio-admin/inicio-admin.module').then( m => m.InicioAdminPageModule)
  },
  {
    path:'',
    redirectTo:'inicio-admin',
    pathMatch: 'full'
  },
  {
    path: 'view-species',
    loadChildren: () => import('./pages/view-species/view-species.module').then( m => m.ViewSpeciesPageModule)
  },
  {
    path:'',
    redirectTo:'view-species',
  pathMatch:'full'
  },
  {
    path: 'new-clima',
    loadChildren: () => import('./pages/new-clima/new-clima.module').then( m => m.NewClimaPageModule)
  },
  {
path: '',
redirectTo:'new-clima',
pathMatch: 'full'
  },
  {
    path: 'new-region',
    loadChildren: () => import('./pages/new-region/new-region.module').then( m => m.NewRegionPageModule)
  },
  {
path:'',
redirectTo:'new-region',
pathMatch:'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
