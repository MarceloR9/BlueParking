import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EntradaComponent } from './entrada/entrada.component';
import { SaidaComponent } from './saida/saida.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'entrada', component: EntradaComponent },
  { path: 'saida', component: SaidaComponent }
];
