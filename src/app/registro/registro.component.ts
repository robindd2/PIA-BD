import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent  implements OnInit {
  
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

  dependenciaSeleccionada : any;
  posicion : any;
  
  seleccionarDependencia(){
    this.posicion = this.dependencias.indexOf(this.dependenciaSeleccionada) + 1;
    console.log(this.posicion);
  }

  roles = ['Administrador',
            'CreadorEventos'];
  
  constructor(private Http:HttpClient, private router: Router) { }

  ngOnInit() {}

  usuario: any;

  login() {
    var nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
    var pass = (<HTMLInputElement>document.getElementById("pass")).value;
    var url = this.APIUrl + 'login?nombreUsuario=' + encodeURIComponent(nombreUsuario) + '&pass=' + encodeURIComponent(pass);
    this.Http.get<any[]>(url).subscribe(data => {
      console.log(data);
      this.usuario = data[0];
      console.log(this.usuario.pass);
      if(this.usuario.nombreUsuario == nombreUsuario || this.usuario.pass == pass) { 
        this.router.navigate(['/login']);
      }
      else{
        alert('Credenciales incorrectas');
      }
    });
  }

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"

  registrarUsuario(){
    this.seleccionarDependencia()
    var idRol = '2';
    var nombreUsuario=((<HTMLInputElement>document.getElementById("nombreUsuario")).value);
    var pass=((<HTMLInputElement>document.getElementById("pass")).value);
    var dependencia=this.posicion.toString();
    console.log(this.posicion);
    var nombre=((<HTMLInputElement>document.getElementById("nombre")).value);
    var primerApellido=((<HTMLInputElement>document.getElementById("primerApellido")).value);
    var segundoApellido=((<HTMLInputElement>document.getElementById("segundoApellido")).value);

    
    var formData=new FormData();
    formData.append("idRol",idRol);
    formData.append("nombreUsuario", nombreUsuario);
    formData.append("pass", pass);
    formData.append("idDependencia", dependencia);
    formData.append("nombre", nombre);
    formData.append("primerApellido", primerApellido);
    formData.append("segundoApellido", segundoApellido);
    this.Http.post(this.APIUrl+'registrarUsuario',formData).subscribe(data=>{
        this.login()
    })
  }

}
