import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { SucursalService } from 'src/app/core/services/sucursal/sucursal.service';

@Component({
  selector: 'app-consulta-sucursal',
  templateUrl: './consulta-sucursal.component.html',
  styleUrls: ['./consulta-sucursal.component.scss']
})

export class ConsultaSucursalComponent implements OnInit {
  public sucursal: Sucursal;
  usuariosObtenidos: Sucursal[];

  constructor(private sucursalService: SucursalService) { 
  this.sucursal = new Sucursal();
  this.usuariosObtenidos = [];
  }

  ngOnInit(): void {}
  

  consultarSucursal(): void {
    this.sucursalService.consultarSucursal(this.sucursal).subscribe(
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
            
            this.sucursal.descripcion = data[0].descripcion,
            this.sucursal.direccion = data[0].direccion,
            this.sucursal.telefono = data[0].telefono,
            this.sucursal.correo = data[0].correo,
            this.sucursal.idEstado = data[0].id_estado
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }
  limpiarCampos():void{
    this.sucursal=new Sucursal();
  }

}
