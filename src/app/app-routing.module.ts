import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { DetalleEventoComponent } from './detalle-evento/detalle-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';
import { AgregarInvitadosComponent } from './agregar-invitados/agregar-invitados.component';
import { MisEventosComponent } from './mis-eventos/mis-eventos.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  },
  {
    path: 'home',
    component: RegistroComponent
  },
  {
    path: 'crear_evento',
    component: CrearEventoComponent
  },
  {
    path: 'detalle_evento',
    component: DetalleEventoComponent
  },
  {
    path: 'editar_evento',
    component: EditarEventoComponent
  },
  {
    path: 'agregar_invitados',
    component: AgregarInvitadosComponent
  },
  {
    path: 'crear_evento',
    component: CrearEventoComponent
  },
  {
    path: 'MIS-EVENTOS',
    component: MisEventosComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
