import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/core/models/productos/productos';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.scss']
})
export class EliminarProductoComponent implements OnInit {

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
        alert('Producto eliminado');
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }



}
