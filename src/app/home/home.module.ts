import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { EditarEventoComponent } from '../editar-evento/editar-evento.component';
import { DetalleEventoComponent } from '../detalle-evento/detalle-evento.component';
import { CrearEventoComponent } from '../crear-evento/crear-evento.component';
import { AgregarInvitadosComponent } from '../agregar-invitados/agregar-invitados.component';
import { MisEventosComponent } from '../mis-eventos/mis-eventos.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,LoginComponent,RegistroComponent,EditarEventoComponent,DetalleEventoComponent,CrearEventoComponent,AgregarInvitadosComponent,MisEventosComponent]
})
export class HomePageModule {}
