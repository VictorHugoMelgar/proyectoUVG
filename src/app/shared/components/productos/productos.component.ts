import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos/productos';
import { ProductosService } from 'src/app/services/productos/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})


export class ProductosComponent implements OnInit {
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

  
  consultarProductos(): void {
    this.productosConsultado=this.productos.id_producto;
    this.productosService.consultarProductos(this.productos).subscribe(
      (res) => {
        const data: any = res;
        this.productosObtenidos = data;
        if (this.productosObtenidos != null) {
          console.log(this.productosObtenidos);
          if (this.productosObtenidos.length == 0) {
            alert('Error al consultar el usuario');
            this.limpiarCampos();
          } else {
            console.log(this.productosObtenidos);
            this.productos.descripcion = data[0].descripcion;
            this.productos.marca = data[0].marca;
            this.productos.existencias = data[0].existencias;
            this.productos.preciocosto = data[0].precio_costo;
            this.productos.precioventa = data[0].precio_venta;
            this.productos.nitproveedor = data[0].nit_proveedor;
            this.productos.idsucursal = data[0].id_sucursal;
            this.productos.idestado = data[0].id_estado;
            this.productos.idtipoproducto = data[0].id_tipo_producto;
            
            
            
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
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
