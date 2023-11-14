import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.component.html',
  styleUrls: ['./mis-eventos.component.scss'],
})
export class MisEventosComponent  implements OnInit {

  constructor(private navCtrl: NavController) { }

  segmentChanged(event: any) {
    if (event.detail.value === 'MIS-EVENTOS') {
      this.navCtrl.navigateForward('/home');
    }
  }
  ngOnInit() {}

}
