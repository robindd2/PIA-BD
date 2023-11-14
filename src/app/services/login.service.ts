import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

    usuarios: any = {
    };
  
    guardarUsuario(usuario: any){
        this.usuarios = usuario;
    }

}