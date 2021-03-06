import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.scss']
})
export class ActualizarUsuarioComponent implements OnInit {
  public usuario: Usuario;
  public usuarioConsultado: string='';
  usuariosObtenidos: Usuario[];
  constructor( private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  //  this.usuario.nombre="hello"

  }

  actualizarUsuario(): void {
      if (this.usuarioConsultado!='') {
      this.usuarioService.actualizarUsuario(this.usuario,this.usuarioConsultado).subscribe(data => {
        if (data  != null) {
          alert("Usuario Actualizado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("Usuario no Actualizado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
    }
  }

  limpiarCampos():void{
    this.usuario=new Usuario();
    this.usuarioConsultado='';

  }


  consultarUsuario(): void {
    this.usuarioConsultado=this.usuario.user;
    this.usuarioService.consultarUsuario(this.usuario).subscribe(
      (res) => {
        const data: any = res;
        this.usuariosObtenidos = data;
        if (this.usuariosObtenidos != null) {
          console.log(this.usuariosObtenidos);
          if (this.usuariosObtenidos.length == 0) {
            alert('Error al consultar el usuario');
            this.limpiarCampos();
          } else {
            console.log(this.usuariosObtenidos);
            this.usuario.pass = data[0].password,
            this.usuario.nombre = data[0].nombre,
            this.usuario.apellido = data[0].apellido,
            this.usuario.idRol = data[0].id_rol,
            this.usuario.idEstado = data[0].id_estado
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario1');
      }
    );
  }


  ngOnInit(): void {
  }

}
