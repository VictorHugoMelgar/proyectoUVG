import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  usuariosObtenidos: Usuario[];

  constructor(
    private router: Router,private authservice:AuthService,
    private usuarioService: UsuarioService
  ) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  }
  /*
  validarLogin(): void {
    if (this.usuario.user == 'admin' && this.usuario.pass == 'admin') {
      alert('se logueo el usuario');
      this.router.navigate(['/menu']);
      this.nuevoTitulo.setearTitulo('Menu Principal');
    } else {
      alert('usuario incorrecto');
    }
  }
*/

  /**
   * Metodo que realiza la validacion del login e invoca el servicio correspondiente
   */

  validarLogin() {
    this.usuarioService.consultarUsuarioLogin(this.usuario).subscribe(
      (res) => {
        const data: any = res;
        this.usuariosObtenidos = data;
        if (this.usuariosObtenidos != null) {
          console.log(this.usuariosObtenidos);
          if (this.usuariosObtenidos.length == 0 || data[0].id_estado!=1 ) {
            alert('Error al consultar el usuario');
          } else {
            console.log(this.usuariosObtenidos);
            this.authservice.autenticado=true
            if (data[0].id_rol===1) {
              this.authservice.rol="administrador"
            this.router.navigateByUrl('/administrador/menu');
            this.authservice.destino="menu-administrador";
            }else{
              this.authservice.rol="empleado"
              this.router.navigateByUrl('/empleado/menu');
              this.authservice.destino="menu-empleado";
            }

          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }
  ngOnInit(): void {
  }

}
