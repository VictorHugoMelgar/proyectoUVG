import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Productos } from 'src/app/models/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
=======

>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent implements OnInit {

<<<<<<< HEAD
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
   
  eliminarProductos(): void {
    this.productosConsultado=this.productos.id_producto;
    this.productosService.elimnarProductos(this.productos).subscribe(
      (res) => {
        const data: any = res;
        this.productosObtenidos = data;
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
