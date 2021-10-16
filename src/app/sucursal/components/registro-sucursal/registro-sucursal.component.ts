import { Component, OnInit } from '@angular/core';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
//import { Sucursal } from '/components/registro-sucursal/registro-sucursal.component';

import { SucursalService } from 'src/app/core/services/sucursal/sucursal.service';



@Component({
  selector: 'app-registro-sucursal',
  templateUrl: './registro-sucursal.component.html',
  styleUrls: ['./registro-sucursal.component.scss']
})


  export class RegistroSucursalComponent implements OnInit {
    public sucursal:Sucursal
     
      constructor(private sucursalService:SucursalService) {
        this.sucursal=new Sucursal();
       }

       

   registrarSucursal(): void {
    if(this.sucursal.nombre != null && 
      this.sucursal.descripcion != null &&
      this.sucursal.direccion != null &&
      this.sucursal.telefono != null &&  
      this.sucursal.correo != null &&
        this.sucursal.idEstado !=0){
        this.sucursalService.registrarSucursal(this.sucursal).subscribe(data => {
          if (data  != null) {
            alert("Sucursal Registrada Exitosamente")
           this.limpiarCampos()
          }else{
            alert("Sucursal no Registrado")
            this.limpiarCampos()
          }
          });
    
      }else{
        alert("Los campos faltantes son obligatorios (*)")
    }
      }

limpiarCampos():void{
  this.sucursal=new Sucursal();

}



  ngOnInit(): void {

  }


}