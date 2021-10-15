import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';


@Component({
  selector: 'app-actualizar-proveedor',
  templateUrl: './actualizar-proveedor.component.html',
  styleUrls: ['./actualizar-proveedor.component.scss']
})
export class ActualizarProveedorComponent implements OnInit {

  public proveedor : Proveedor;
  public proveedorConsultado: string='';
  proveedoresObtenidos: Proveedor[];

  constructor( private proveedorService : ProveedorService) { 
    this.proveedor = new Proveedor();
    this.proveedoresObtenidos = [];
  }

  ngOnInit(): void {
  }
  limpiarCampos():void{
    this.proveedor=new Proveedor();
    this.proveedorConsultado='';

  }
  

  actualizarProveedor(): void{
    this.proveedorService.actualizarProveedor(this.proveedor).subscribe((res) =>{
      const data: any=res;
      console.log("imprimiendoda", data)
      this.proveedoresObtenidos = data;
      if(this.proveedoresObtenidos != null){
        alert("Cliente actualizado con Exito")
          this.limpiarCampos()
      }
    }, error =>{
      alert(error);
      alert("Error al registrar");
    })
  }
  
}

