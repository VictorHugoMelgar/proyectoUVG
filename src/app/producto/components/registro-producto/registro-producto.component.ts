import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Productos } from 'src/app/models/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';
=======

>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
@Component({
  selector: 'app-registro-producto',
  templateUrl: './registro-producto.component.html',
  styleUrls: ['./registro-producto.component.scss']
})
export class RegistroProductoComponent implements OnInit {

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

=======
  constructor() { }

  ngOnInit(): void {
  }

}
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
