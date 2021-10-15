import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';

@Component({
  selector: 'app-consulta-usuario',
  templateUrl: './consulta-usuario.component.html',
  styleUrls: ['./consulta-usuario.component.scss']
})
export class ConsultaUsuarioComponent implements OnInit {
  public usuario: Usuario;
  usuariosObtenidos: Usuario[];

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
    this.usuariosObtenidos = [];
  }

  ngOnInit(): void {}


  consultarUsuario(): void {
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
        alert('Error al consultar el usuario');
      }
    );
  }

  limpiarCampos():void{
    this.usuario=new Usuario();
  }




}
