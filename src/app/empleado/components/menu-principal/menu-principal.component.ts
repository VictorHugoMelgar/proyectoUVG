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

  navegacionMenu(ruta: string): void {
    switch (ruta) {
      case 'registroUsuario':
        this.router.navigate(['/registro-usuario']);
       // this.nuevoTitulo.setearTitulo('Registro Usuario');
        break;
      case 'consultaUsuario':
        this.router.navigate(['/consulta-usuario']);
//this.nuevoTitulo.setearTitulo('Consulta Usuario');
        break;
      case 'actualizarUsuario':
        this.router.navigate(['/actualizar-usuario']);
//this.nuevoTitulo.setearTitulo('Actualizar Usuario');
        break;
        case 'eliminarUsuario':
          this.router.navigate(['/borrar-usuario']);
       //   this.nuevoTitulo.setearTitulo('Eliminar Usuario');
          break;
        case 'registroCliente':
          this.router.navigate(['/registro-cliente']);
//this.nuevoTitulo.setearTitulo('Registro cliente');
          break;
        case 'consultaCliente':
          this.router.navigate(['/consulta-cliente']);
      //    this.nuevoTitulo.setearTitulo('Consulta cliente');
          break;
        case 'actualizarCliente':
          this.router.navigate(['/actualizar-cliente']);
   //       this.nuevoTitulo.setearTitulo('Actualizar cliente');
          break;
          case 'eliminarCliente':
            this.router.navigate(['/borrar-cliente']);
     //       this.nuevoTitulo.setearTitulo('Eliminar Cliente');
            break;
      case 'cerrarSesion':
        this.router.navigate(['/login']);
      //  this.nuevoTitulo.setearTitulo('Primer Proyecto Angular');
        break;

      default:
        break;
    }
  }

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
