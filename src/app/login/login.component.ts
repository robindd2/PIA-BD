import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  readonly APIUrl =  "http://localhost:5293/api/PIABDD/"


  constructor(private Http:HttpClient, private router: Router, private loginService: LoginService) {}

  ngOnInit() {}

  usuario: any = {
  };

  login() {
    var nombreUsuario = (<HTMLInputElement>document.getElementById("nombreUsuario")).value;
    var pass = (<HTMLInputElement>document.getElementById("pass")).value;
    var url = this.APIUrl + 'login?nombreUsuario=' + encodeURIComponent(nombreUsuario) + '&pass=' + encodeURIComponent(pass);
    this.Http.get<any[]>(url).subscribe(data => {
      console.log(data);
      this.usuario = data[0];
      this.loginService.guardarUsuario(this.usuario)
      console.log(this.usuario.pass);
      if(this.usuario.nombreUsuario == nombreUsuario || this.usuario.pass == pass) { 
        this.router.navigate(['/home']);
      }
      else{
        alert('Credenciales incorrectas');
      }
    });
  }

}
