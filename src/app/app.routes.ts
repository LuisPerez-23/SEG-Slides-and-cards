import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'coches',
    loadComponent: () => import('./pages/coches/coches.page').then( m => m.CochesPage)
  },
  {
    path: 'aviones',
    loadComponent: () => import('./pages/aviones/aviones.page').then( m => m.AvionesPage)
  },
  {
    path: 'barco',
    loadComponent: () => import('./pages/barco/barco.page').then( m => m.BarcoPage)
  },
];
