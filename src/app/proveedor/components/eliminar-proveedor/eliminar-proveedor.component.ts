import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';


@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.scss']
})
export class EliminarProveedorComponent implements OnInit {

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
  
  eliminarProveedor(): void {
    this.proveedorConsultado=this.proveedor.nit;
    this.proveedorService.elimnarProveedor(this.proveedor).subscribe(
      (res) => {
        const data: any = res;
        this.proveedoresObtenidos = data;
        console.log(data);
        alert('Usuario eliminado');
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  
  
}
