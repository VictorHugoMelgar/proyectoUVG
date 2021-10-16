import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/core/models/productos/productos';
import { ProductosService } from 'src/app/core/services/productos/productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.scss']
})
export class ActualizarProductoComponent implements OnInit {

<<<<<<< HEAD

=======
 
>>>>>>> 66f3dda0cae76b76a7ead3830a59f472375f25f4
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
        alert("Producto actualizado con Exito")
          this.limpiarCampos()
      }
    }, error =>{
      alert(error);
      alert("Error al registrar");
    })
  }
<<<<<<< HEAD

=======
  
>>>>>>> 66f3dda0cae76b76a7ead3830a59f472375f25f4
}

