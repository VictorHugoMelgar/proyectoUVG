import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {


  public productos : Productos;
  public productosConsultado: string='';
  productosObtenidos: Productos[];

  constructor( private productosService : ProductosService) { 
    this.productos = new Productos();
    this.productosObtenidos = [];
  }

  ngOnInit(): void {
  }
  limpiarCampos():void{
    this.productos=new Productos();
    this.productosConsultado='';

  }
  
  registrarProductos(): void{
    this.productosService.registrarProductos(this.productos).subscribe(res =>{
      const data: any=res;
      console.log(data)
      this.productosObtenidos = data;
      if(this.productosObtenidos != null){
        alert("Cliente Registrado con Exito")
          this.limpiarCampos()
      }
    }, error =>{
      alert("Error al registrar");
    })
  }

  
  
}

