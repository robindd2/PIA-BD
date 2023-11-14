import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}
