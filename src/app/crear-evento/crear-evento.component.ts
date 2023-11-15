import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-crear-evento',
  templateUrl: './crear-evento.component.html',
  styleUrls: ['./crear-evento.component.scss'],
})
export class CrearEventoComponent  implements OnInit {
  
  tipoEventos = [ 'Deportivo',
  'Cultural',
  'Academico',
  'Responsabilidad Social'];

  constructor(private Http:HttpClient, private loginService: LoginService) { }

  ngOnInit() {}

  usuario = this.loginService.usuarios;
  idUsuario = this.usuario.idUsuario

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"


  tipoEventoSeleccionado : any;
  posicion : any;

  seleccionarTipoEvento(){
    this.posicion = this.tipoEventos.indexOf(this.tipoEventoSeleccionado) + 1;
    console.log(this.posicion);
  }

  agregarEvento(){
    this.seleccionarTipoEvento()
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
    formData.append("idUsuario", idUsuario);
    formData.append("idTipoEvento", idTipoEvento);
    formData.append("nombreEvento", nombreEvento);
    formData.append("fechaInicio", fechaInicio);
    formData.append("fechaFin", fechaFin);
    formData.append("lugar", lugar);
    formData.append("descripcion", descripcion);
    formData.append("cupo", cupo);
    formData.append("estado", estado);
    this.Http.post(this.APIUrl+'agregarEvento',formData).subscribe(data=>{
    })
  }


}
