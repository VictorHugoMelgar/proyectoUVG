import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }
  ngOnInit(): void {}

  salir(){
    this.authservice.destino="login"
    this.router.navigateByUrl('/auth/login');

  }
  proveedores(){
    this.authservice.destino="proveedor"
    this.router.navigateByUrl('administrador/registro-proveedor');

  }
  gu(){
    sessionStorage.setItem("sesion","admin XD");

  }
  con(){
    sessionStorage.getItem("sesion")
    console.log("mi sesion es: "+sessionStorage.getItem("sesion"))
  }
}
