import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';


@Component({
  selector: 'app-consulta-proveedor',
  templateUrl: './consulta-proveedor.component.html',
  styleUrls: ['./consulta-proveedor.component.scss']
})
export class ConsultaProveedorComponent implements OnInit {
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
  
  

  
  consultarProveedor(): void {
    this.proveedorConsultado=this.proveedor.nit;
    
    this.proveedorService.consultarProveedor(this.proveedor).subscribe(
      (res) => {
        const data: any = res;
        this.proveedoresObtenidos = data;
        
        if (this.proveedoresObtenidos != null) {
          console.log(this.proveedoresObtenidos);
          if (this.proveedoresObtenidos.length == 0) {
            alert('Error al consultar el usuario');
            this.limpiarCampos();
          } else {
            console.log(this.proveedoresObtenidos);
            this.proveedor.nombre = data[0].nombre;
            this.proveedor.apellido = data[0].apellido;
            this.proveedor.direccion = data[0].direccion;
            this.proveedor.telefono = data[0].telefono;
            this.proveedor.correo = data[0].correo;
            
            
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }
  

  
  
}

