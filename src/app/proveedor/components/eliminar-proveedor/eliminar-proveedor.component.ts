import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

=======
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668

@Component({
  selector: 'app-eliminar-proveedor',
  templateUrl: './eliminar-proveedor.component.html',
  styleUrls: ['./eliminar-proveedor.component.scss']
})
export class EliminarProveedorComponent implements OnInit {

<<<<<<< HEAD
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

  
  
=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
}
