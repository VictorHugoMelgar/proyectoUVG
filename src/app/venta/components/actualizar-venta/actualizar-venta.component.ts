import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/core/models/catalogo/catalogo';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { DetalleVenta } from 'src/app/core/models/detalle-venta/detalle-venta';
import { Productos } from 'src/app/core/models/productos/productos';
import { Venta } from 'src/app/core/models/venta/venta';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { DetalleVentaService } from 'src/app/core/services/detalle-venta/detalle-venta.service';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { VentaService } from 'src/app/core/services/venta/venta.service';


@Component({
  selector: 'app-actualizar-venta',
  templateUrl: './actualizar-venta.component.html',
  styleUrls: ['./actualizar-venta.component.scss']
})
export class ActualizarVentaComponent implements OnInit {
  ListadoVentas:Venta[];
  ventaObtenida:Venta;
  DisableComponent=false;
  formatoFecha='';
  fecha='';
  //identificadores de seleccion
  selectVenta:Venta;
  TotalVenta: Number = 0;


  //catalogos
  catalogoSucursal: Catalogo[];
  sucursalObtenida: Catalogo;
  catalogoEstado: Catalogo[];
  estadoObtenido: Catalogo;
  catalogoTransaccion: Catalogo[];
  transaccionObtenida: Catalogo;
  curentProducto:Productos;
  ListadoProductos: Productos[];
  //gestion de listados
  ListadoProductosEliminados: Productos[];
  ListadoProductosAgregados: Productos[];




  constructor(private catalogoService:CatalogoService,private clienteService:ClienteService,private productoService:ProductosService,
    private ventaService:VentaService, private detalleService:DetalleVentaService) {
    this.ListadoVentas=new Array<Venta>();
    this.ventaObtenida=new Venta();
    this.selectVenta=new Venta();
    this.sucursalObtenida = new Catalogo();
    this.catalogoSucursal = new Array<Catalogo>();
    this.estadoObtenido = new Catalogo();
    this.catalogoEstado = new Array<Catalogo>();
    this.transaccionObtenida = new Catalogo();
    this.catalogoTransaccion = new Array<Catalogo>();
    this.curentProducto= new Productos();
    this.ListadoProductos = new Array<Productos>();
    this.ListadoProductosEliminados = new Array<Productos>();
    this.ListadoProductosAgregados = new Array<Productos>();
    this.CargarVentas();
    this.CargarCatalogos();
   }

   public CargarCatalogos(): void {
    this.CatSucursal();
    this.CatTransaccion();
    this.CatEstado();
  }



   public CatSucursal(): void {
    this.catalogoService.consultarCatalogoSucursal().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            console.log('error catalogo estado');
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i + ' ' + data[i].descripcion);
              (this.sucursalObtenida.id = data[i].id_sucursal),
                (this.sucursalObtenida.descripcion = data[i].descripcion),
                this.catalogoSucursal.push(this.sucursalObtenida);
              this.sucursalObtenida = new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  public CatEstado(): void {
    this.catalogoService.consultarCatalogoEstado().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            console.log('error catalogo estado');
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i + ' ' + data[i].descripcion);
              (this.estadoObtenido.id = data[i].id_estado),
                (this.estadoObtenido.descripcion = data[i].descripcion),
                this.catalogoEstado.push(this.estadoObtenido);
              this.estadoObtenido = new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  public CatTransaccion(): void {
    this.catalogoService.consultarCatalogoTipoTransaccion().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            console.log('error catalogo saucursal');
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i + ' ' + data[i].descripcion);
              (this.transaccionObtenida.id = data[i].id_tipo_transaccion),
                (this.transaccionObtenida.descripcion = data[i].descripcion),
                this.catalogoTransaccion.push(this.transaccionObtenida);
              this.transaccionObtenida = new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }


   public CargarVentas():void{
    this.catalogoService.consultarCatalogoVentas().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);

              this.ventaObtenida.id_venta = data[i].id_venta,
              this.ventaObtenida.id_cliente = data[i].id_cliente,
             // this.ventaObtenida.fecha_venta = data[i].fecha_venta,
              this.formatoFecha = data[0].fecha_venta,
              this.fecha = this.formatoFecha.substring(0,4)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(5,7)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(8,10)
              this.ventaObtenida.fecha_venta = this.fecha,
              this.ventaObtenida.nombre_cliente = data[i].nombre_cliente,
              this.ventaObtenida.direccion_cliente = data[i].direccion_cliente,
              this.ventaObtenida.total_venta = data[i].total_venta,
              this.ventaObtenida.id_estado = data[i].id_estado,
              this.ventaObtenida.id_tipo_transaccion = data[i].id_tipo_transaccion,
              this.ventaObtenida.id_usuario = data[i].id_usuario,
              this.ventaObtenida.id_sucursal = data[i].nombre_sucursal,
              this.ventaObtenida.nit = data[i].nit_cliente,
              console.log("nit "+data[i].nit_cliente)
              this.ListadoVentas.push(this.ventaObtenida);
              this.ventaObtenida=new Venta();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }


  public consultarVenta(currentVenta:Venta):void{
    this.selectVenta=currentVenta;
    this.DisableComponent =!this.DisableComponent;
    this.consultardetalleVenta(currentVenta.id_venta);
    }


  public volver():void{
  this.DisableComponent =!this.DisableComponent;
  }

  consultarNitCliente(): void {
    let c= new Cliente(0,'','',this.selectVenta.nit.toString(),'',0,'',0,'','',0);

    this.clienteService.consultarCliente(c).subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            alert('Error al consultar el nit del cliente');
          } else {
            this.selectVenta.id_cliente = data[0].id_cliente
          }
        }
        this.ActualizarVenta();
      },
      (error) => {
        alert('Error al consultar el cliente');
      }
    );
  }

  public eliminarProducto(producto:Productos): //producto
  void {
    let indice = this.ListadoProductos.indexOf(producto);//extraemos el indice en el array
    console.log('eliminado: ' + indice); //vemos el elemento
    this.TotalVenta = this.TotalVenta.valueOf()-this.ListadoProductos[indice].SubTotalProductoVenta.valueOf();//restamos del gran total el producto eliminado
    this.ListadoProductosEliminados.push(this.ListadoProductos[indice]);//guardamos el cambio
    this.ListadoProductos.splice(indice, 1); //eliminar elemento

  }

  AgregarProducto() {
    if (this.curentProducto.id_producto!="" && this.curentProducto.CantidadProductoVenta!=0) {
     this.productoService.consultarProductos(this.curentProducto).subscribe(
       (res) => {
         const data: any = res;
         if (data != null) {
           if (data.length == 0) {
             console.log('error catalogo estado');
           } else {
             for (let i = 0; i < data.length; i++) {
                 this.curentProducto.descripcion = data[i].descripcion,
                 this.curentProducto.marca = data[i].marca,
                 this.curentProducto.existencias = data[i].existencias,
                 this.curentProducto.idtipoproducto = data[i].id_tipo_producto,
                 this.curentProducto.precioventa = data[i].precio_venta,
                 this.curentProducto.preciocosto= data[i].precio_costo,
                 this.curentProducto.idestado = data[i].id_estado,
                 this.curentProducto.idtipoproducto = data[i].id_tipo_producto,
                 this.curentProducto.SubTotalProductoVenta= ((data[i].precio_venta)*(this.curentProducto.CantidadProductoVenta.valueOf())),
                 this.ListadoProductos.push(this.curentProducto);
                 this.ListadoProductosAgregados.push(this.curentProducto);
                 this.TotalVenta=(this.TotalVenta.valueOf())+(this.curentProducto.SubTotalProductoVenta.valueOf());
               this.curentProducto = new Productos();
             }
           }
         }
       },
       (error) => {
         alert('Error al consultar el producto');
       }
     );
    }else{
     alert('Error ingrese el codigo del producto y su cantidad');
   } }


  public ActualizarVenta2():void{
   // this.DisableComponent =!this.DisableComponent;
for (let i = 0; i < this.ListadoProductos.length; i++) {
  this.detalleService.actualizarDetalleVenta(this.selectVenta.id_venta).subscribe(
    (res) => {
      const data: any = res;
      if (data != null) {
        if (data.length == 0) {
          alert('Error al consultar la venta');
        } else {
          for (let i = 0; i < data.length; i++) {
        }
        }
       // this.eliminarVenta();
      }
    },
    (error) => {
      alert('Error al consultar el usuario');
    }
  );
}
    }
    public ActualizarVenta():void{
      // this.DisableComponent =!this.DisableComponent;
   for (let i = 0; i < this.ListadoProductos.length; i++) {
     this.ventaService.actualizarVenta(this.selectVenta).subscribe(
       (res) => {
         const data: any = res;
         if (data != null) {
            if (data.length == 0) {
             alert('Error al actualizar la venta');
           } else {
            alert('La venta ha sido actualizada correctamente');
            this.ActualizarVenta2();
           }
         }
       },
       (error) => {
         alert('Error al consultar el usuario');
       }
     );
   }
       }


  public consultardetalleVenta(idDetalle:String): void {
    this.detalleService.consultarDetalleVenta(idDetalle).subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            alert('Error al consultar la venta');
          } else {
            for (let i = 0; i < data.length; i++) {
              this.curentProducto.id_producto = data[i].id_producto,
              this.curentProducto.descripcion = data[i].descripcion_producto,
              this.curentProducto.CantidadProductoVenta = data[i].cantidad,
              this.curentProducto.marca = data[i].marca,
              this.curentProducto.existencias = data[i].existencias,
              this.curentProducto.idtipoproducto = data[i].id_tipo_producto,
              this.curentProducto.precioventa = data[i].precio_venta,
              this.curentProducto.preciocosto= data[i].precio_costo,
              this.curentProducto.idestado = data[i].id_estado,
              this.curentProducto.idtipoproducto = data[i].id_tipo_producto,
              this.curentProducto.SubTotalProductoVenta= ((data[i].precio_venta)*(this.curentProducto.CantidadProductoVenta.valueOf())),
              this.ListadoProductos.push(this.curentProducto);
              this.TotalVenta=(this.TotalVenta.valueOf())+(this.curentProducto.SubTotalProductoVenta.valueOf());
            this.curentProducto = new Productos();
          }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }


  ngOnInit(): void {
  }

}
