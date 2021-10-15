import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Productos } from 'src/app/models/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
=======
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

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
  

  actualizarProductos(): void{
    this.productosService.actualizarProductos(this.productos).subscribe((res) =>{
      const data: any=res;
      console.log("imprimiendoda", data)
      this.productosObtenidos = data;
      if(this.productosObtenidos != null){
        alert("Cliente actualizado con Exito")
          this.limpiarCampos()
      }
    }, error =>{
      alert(error);
      alert("Error al registrar");
    })
  }
  
}

=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
