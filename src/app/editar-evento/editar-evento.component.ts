import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { detalleEvento } from '../services/detalleEvento.service';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss'],
})
export class EditarEventoComponent  implements OnInit {
  tipoEventos = [ 'Deportivo',
  'Cultural',
  'Academico',
  'Responsabilidad Social'];

  constructor(private Http:HttpClient, private loginService: LoginService, private detalleEvento: detalleEvento) { }

  ngOnInit() {
    this.detallesEvento(this.idEvento)
    this.mostrarInvitadosEspeciales()
    this.mostrarInvitados(this.idEvento)
  }

  evento: any=[];
  usuario = this.loginService.usuarios;
  idUsuario = this.usuario.idUsuario
  idEvento = this.detalleEvento.idEvento

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"


  tipoEventoSeleccionado : any;
  posicion : any;
  invitadosEspeciales: any=[];
  invitados: any=[];

  detallesEvento(idEvento : any){
    console.log(idEvento)
    this.Http.get<any[]>(this.APIUrl+'detalleEvento?idEvento=' + idEvento).subscribe(data=>{
      this.evento=data;
      console.log(this.evento)
      this.evento.forEach((evento: any) => {
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

  seleccionarTipoEvento(){
    this.posicion = this.tipoEventos.indexOf(this.tipoEventoSeleccionado) + 1;
    console.log(this.posicion);
  }

  editarEvento(){
    this.seleccionarTipoEvento()
    var idEvento = this.detalleEvento.idEvento
    var idUsuario = this.idUsuario;
    var idTipoEvento= this.posicion.toString();
    var nombreEvento=((<HTMLInputElement>document.getElementById("nombreEvento")).value);
    var fechaInicio = '2023-10-31'
    var fechaFin = '2023-10-31'
    var lugar=((<HTMLInputElement>document.getElementById("lugar")).value);
    var descripcion=((<HTMLInputElement>document.getElementById("descripcion")).value);
    var cupo=((<HTMLInputElement>document.getElementById("cupo")).value);
    var estado='1';

    
    var formData=new FormData();
    formData.append("idEvento", idEvento);
    formData.append("idUsuario", idUsuario);
    formData.append("idTipoEvento", idTipoEvento);
    formData.append("nombreEvento", nombreEvento);
    formData.append("fechaInicio", fechaInicio);
    formData.append("fechaFin", fechaFin);
    formData.append("lugar", lugar);
    formData.append("descripcion", descripcion);
    formData.append("cupo", cupo);
    formData.append("estado", estado);
    this.Http.post(this.APIUrl+'editarEvento',formData).subscribe(data=>{
    })
  }

  mostrarInvitadosEspeciales(){
    this.Http.get<any[]>(this.APIUrl+'mostrarInvitadosEspeciales').subscribe(data=>{
      this.invitadosEspeciales=data;
    })
  }

  mostrarInvitados(idEvento : any){
    this.Http.get<any[]>(this.APIUrl+'mostrarInvitados?idEvento=' + idEvento).subscribe(data=>{
      this.invitados=data;
      console.log(this.invitados)
    })
  }

}
