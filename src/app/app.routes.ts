import { Routes } from '@angular/router';
import { MapHome } from './map-home/map-home';

export const routes: Routes = [
  { path: 'map', component: MapHome },
  { path: '', redirectTo: 'map', pathMatch: 'full' }
];
