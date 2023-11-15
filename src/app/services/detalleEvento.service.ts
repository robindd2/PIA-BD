import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class detalleEvento {

    idEvento: any
  
    guardarIdEvento(idEvento:  any){
        this.idEvento = idEvento;
    }

}