import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(private navCtrl: NavController, private Http:HttpClient, private router: Router) { }

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

  mostrarTipoEvento(evento: any){
    this.Http.get<any[]>(this.APIUrl+'mostrarTipoEvento?idTipoEvento=' + evento.idTipoEvento).subscribe(data=>{
      if (data.length > 0) {
        evento.tipoEvento = data[0].tipoEvento;
      }
    })
  }
    

}
