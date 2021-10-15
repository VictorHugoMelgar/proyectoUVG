import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-registro-proveedor',
  templateUrl: './registro-proveedor.component.html',
  styleUrls: ['./registro-proveedor.component.scss']
})


export class RegistroProveedorComponent implements OnInit {
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
  
  registrarProveedor(): void{
    this.proveedorService.registrarProveedor(this.proveedor).subscribe(res =>{
      const data: any=res;
      console.log(data)
      this.proveedoresObtenidos = data;
      if(this.proveedoresObtenidos != null){
        alert("Cliente Registrado con Exito")
          this.limpiarCampos()
      }
    }, error =>{
      alert("Error al registrar");
    })
  }

  
  
}
