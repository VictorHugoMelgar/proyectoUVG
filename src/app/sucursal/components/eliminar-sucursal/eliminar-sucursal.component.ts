import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { SucursalService } from 'src/app/core/services/sucursal/sucursal.service';

@Component({
  selector: 'app-eliminar-sucursal',
  templateUrl: './eliminar-sucursal.component.html',
  styleUrls: ['./eliminar-sucursal.component.scss']
})
export class EliminarSucursalComponent implements OnInit {
  public sucursal: Sucursal;
  public sucursalConsultado: string='';
  usuariosObtenidos: Sucursal[];

  constructor(private sucursalService: SucursalService) { 
    this.sucursal = new Sucursal();
    this.usuariosObtenidos = [];
  }
  
  actualizarSucursal(): void {
      if (this.sucursalConsultado!='') {
      this.sucursalService.actualizarSucursal(this.sucursal,this.sucursalConsultado).subscribe(data => {
        alert('ejecucion')
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

  eliminarSucursal(): void {
      if (this.sucursal.nombre!='') {
     this.sucursalService.eliminarSucursal(this.sucursal,this.sucursalConsultado).subscribe(data => {
       if (data  != null) {
         alert("Usuario Eliminado Exitosamente")
         this.limpiarCampos()
       }else{
         alert("Usuario no Eliminado")
         this.limpiarCampos()
       }
       });
   }else{
     alert('Consulte primero un login_name por favor')
   }
 }
 
 
 consultarSucursal(): void {
  this.sucursalConsultado=this.sucursal.nombre;
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



  ngOnInit(): void {
  }

}
