import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { detalleEvento } from '../services/detalleEvento.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private navCtrl: NavController, private Http:HttpClient, private router: Router, private detalleEventoService: detalleEvento) { }

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"

  segmentChanged(event: any) {
    if (event.detail.value === 'EVENTOS') {
      this.navCtrl.navigateForward('/MIS-EVENTOS');
    }
  }
  ngOnInit() {
    this.listarEventos()
  }

  eventos: any=[];
  tipoEvento: any=[];
  idTipoEvento: any=[];

  dependencia: any;

  listarEventos(){
    this.Http.get<any[]>(this.APIUrl+'listarEventos').subscribe(data=>{
      this.eventos=data;
      this.eventos.forEach((evento: any) => {
        this.mostrarTipoEvento(evento);
      });
    })
  }


  mandarIdEvento(idEvento: any) {
    this.detalleEventoService.guardarIdEvento(idEvento)
  }

  mostrarTipoEvento(evento: any){
    this.Http.get<any[]>(this.APIUrl+'mostrarTipoEvento?idTipoEvento=' + evento.idTipoEvento).subscribe(data=>{
      if (data.length > 0) {
        evento.tipoEvento = data[0].tipoEvento;
      }
    })
  }
    

}
