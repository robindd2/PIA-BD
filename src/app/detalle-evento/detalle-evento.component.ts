import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { detalleEvento } from '../services/detalleEvento.service';

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.scss'],
})
export class DetalleEventoComponent  implements OnInit {

  constructor(private Http:HttpClient, private router: Router, private detalleEvento: detalleEvento) { }

  ngOnInit() {

    this.detallesEvento(this.idEvento)
    this.mostrarInvitadosEspeciales()

  }

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"


  
  evento: any=[];
  tipoEvento: any=[];
  idTipoEvento: any=[];
  idEvento = this.detalleEvento.idEvento
  invitadosEspeciales: any=[];


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

  mostrarInvitadosEspeciales(){
    this.Http.get<any[]>(this.APIUrl+'mostrarInvitadosEspeciales').subscribe(data=>{
      this.invitadosEspeciales=data;
    })
  }

}
