import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.scss'],
})
export class MisEventosComponent  implements OnInit {

  constructor(private navCtrl: NavController, private loginService: LoginService, private Http:HttpClient, private router: Router) { }

  segmentChanged(event: any) {
    if (event.detail.value === 'MIS-EVENTOS') {
      this.navCtrl.navigateForward('/home');
    }
  }
  ngOnInit() {
    console.log(this.usuario)
    this.listarMisEventos(this.idUsuario)
  }

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"

  usuario = this.loginService.usuarios;
  misEventos: any=[];
  tipoEvento: any=[];
  idTipoEvento: any=[];

  idUsuario = this.usuario.idUsuario
  idEvento = this.usuario.idEvento

  dependencia: any;

  actualizarVista(){
    this.listarMisEventos(this.idUsuario)
  }

  listarMisEventos(idUsuario : any){
    this.Http.get<any[]>(this.APIUrl+'listarMisEventos?idUsuario=' + idUsuario).subscribe(data=>{
      this.misEventos=data;
      console.log(this.misEventos)
      this.misEventos.forEach((evento: any) => {
        this.mostrarTipoEvento(evento);
      });
    })
  }
  mostrarTipoEvento(evento: any){
    this.Http.get<any[]>(this.APIUrl+'mostrarTipoEvento?idTipoEvento=' + evento.idTipoEvento).subscribe(data=>{
      if (data.length > 0) {
        evento.tipoEvento = data[0].tipoEvento;
      }
    })
  }

  eliminarEvento(idEvento : any){
    this.Http.get<any[]>(this.APIUrl+'eliminarEvento?idEvento='+ idEvento).subscribe(data=>{
      console.log(this.misEventos)
      this.misEventos.forEach((evento: any) => {
        this.mostrarTipoEvento(evento);
      });
    })
  }

}
