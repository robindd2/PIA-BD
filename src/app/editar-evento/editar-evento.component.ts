import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-evento',
  templateUrl: './editar-evento.component.html',
  styleUrls: ['./editar-evento.component.scss'],
})
export class EditarEventoComponent  implements OnInit {
  tipoEventos = [ 'Alumno',
'Maestro',
'Director',
'SubDirector',
'Secretaria',
'Jefes de Academia',
'Administrativo'];
  constructor() { }

  ngOnInit() {}

}
