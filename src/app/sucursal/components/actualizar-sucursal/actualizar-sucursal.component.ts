import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { SucursalService } from 'src/app/core/services/sucursal/sucursal.service';

@Component({
  selector: 'app-actualizar-sucursal',
  templateUrl: './actualizar-sucursal.component.html',
  styleUrls: ['./actualizar-sucursal.component.scss']
})
export class ActualizarSucursalComponent implements OnInit {

  public sucursal: Sucursal;
  public sucursalConsultado: string='';
  sucursalObtenidos: Sucursal[];
  constructor(private sucursalService: SucursalService) { 
    this.sucursal = new Sucursal();
    this.sucursalObtenidos = [];
  }

  actualizarSucursal(): void {
      if (this.sucursalConsultado!='') {
      this.sucursalService.actualizarSucursal(this.sucursal,this.sucursalConsultado).subscribe(data => {
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
    this.sucursal=new Sucursal();
    this.sucursalConsultado='';

  }

  consultarSucursal(): void {
    this.sucursalConsultado=this.sucursal.nombre;
    this.sucursalService.consultarSucursal(this.sucursal).subscribe(
      (res) => {
        const data: any = res;
        this.sucursalObtenidos = data;
        if (this.sucursalObtenidos != null) {
          console.log(this.sucursalObtenidos);
          if (this.sucursalObtenidos.length == 0) {
            alert('Error al consultar el usuario');
            this.limpiarCampos();
          } else {
            console.log(this.sucursalObtenidos);
            
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

  ngOnInit(): void {
  }

}
