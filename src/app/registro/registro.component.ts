import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {}

}
