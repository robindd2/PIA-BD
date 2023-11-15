import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-invitados',
  templateUrl: './agregar-invitados.component.html',
  styleUrls: ['./agregar-invitados.component.scss'],
})
export class AgregarInvitadosComponent  implements OnInit {
  dependencias = ['Facultad de Arquitectura',
  'Facultad de Artes Visuales',
  'Facultad de Ciencias Biologicas',
  'Facultad de Ciencias de la Comunicacion',
  'Facultad de Ciencias Fisico Matematicas',
  'Facultad de Ciencias Quimicas',
  'Facultad de Contaduria Publica y Administracion',
  'Facultad de Derecho y Criminologia',
  'Facultad de Economia',
  'Facultad de Enfermeria',
  'Facultad de Filosofia y Letras',
  'Facultad de Ingenieria Civil',
  'Facultad de Ingenieria Mecanica y Electrica',
  'Facultad de Medicina',
  'Facultad de Musica',
  'Facultad de Odontologia',
  'Facultad de Psicologia',
  'Facultad de Salud Publica y Nutricion',
  'Rectoria'];

  ocupaciones = ['Alumno',
  'Maestro',
  'Director',
  'SubDirector',
  'Secretaria',
  'Jefes de Academia',
  'Administrativo'];

  dependenciaSeleccionada : any;
  posicionOcupacion : any;
  ocupacionSeleccionada : any;
  posicionDependencia: any; 

  seleccionarDependencia(){
    this.posicionDependencia = this.dependencias.indexOf(this.dependenciaSeleccionada) + 1;
    console.log(this.posicionDependencia);
  }

  seleccionarOcupacion(){
    this.posicionOcupacion = this.ocupaciones.indexOf(this.ocupacionSeleccionada) + 1;
    console.log(this.posicionOcupacion);
  }
   
  constructor(private Http:HttpClient, private router: Router) { }

  ngOnInit() {}

  readonly APIUrl = "http://localhost:5293/api/PIABDD/"
 

  agregarInvitados(){
    this.seleccionarDependencia()
    this.seleccionarOcupacion()
    var nombre=((<HTMLInputElement>document.getElementById("nombre")).value);
    var primerApellido=((<HTMLInputElement>document.getElementById("primerApellido")).value);
    var segundoApellido=((<HTMLInputElement>document.getElementById("segundoApellido")).value);
    var dependencia=this.posicionDependencia.toString();
    var ocupacion=this.posicionOcupacion.toString();
  
    console.log(this.posicionDependencia);
    console.log(this.posicionOcupacion);

    var formData=new FormData();
    formData.append("nombre", nombre);
    formData.append("primerApellido", primerApellido);
    formData.append("segundoApellido", segundoApellido);
    formData.append("idDependencia", dependencia);
    formData.append("idOcupacion", ocupacion);
    this.Http.post(this.APIUrl+'agregarInvitados',formData).subscribe(data=>{})
  }

 

}
