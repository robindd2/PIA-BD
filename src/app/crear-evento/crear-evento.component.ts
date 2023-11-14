import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {}

}
