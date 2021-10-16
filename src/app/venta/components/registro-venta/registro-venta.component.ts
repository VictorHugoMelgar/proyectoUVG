import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Catalogo } from 'src/app/core/models/catalogo/catalogo';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { DetalleVenta } from 'src/app/core/models/detalle-venta/detalle-venta';
import { Productos } from 'src/app/core/models/productos/productos';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { Venta } from 'src/app/core/models/venta/venta';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
import { DetalleVentaService } from 'src/app/core/services/detalle-venta/detalle-venta.service';
import { ProductosService } from 'src/app/core/services/productos/productos.service';
import { VentaService } from 'src/app/core/services/venta/venta.service';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.scss'],
})
export class RegistroVentaComponent implements OnInit {

  loading=false;
  curentProducto:Productos;
  venta: Venta;
  detalleVenta:DetalleVenta[];
  ListadoProductos: Productos[];
  TotalVenta: Number = 0;
  cliente: Cliente;
  idCliente:number=0;
//catalogos
  catalogoSucursal: Catalogo[];
  sucursalObtenida: Catalogo;
  catalogoEstado: Catalogo[];
  estadoObtenido: Catalogo;
  catalogoTransaccion: Catalogo[];
  transaccionObtenida: Catalogo;

  constructor(private catalogoService: CatalogoService,private productoService:ProductosService,
    private clienteservice:ClienteService,private ventaService:VentaService,
    private detalleVentaService:DetalleVentaService) {
    this.curentProducto= new Productos();
    this.ListadoProductos = new Array<Productos>();
    this.venta = new Venta();
    this.detalleVenta=new Array<DetalleVenta>();
    this.cliente = new Cliente();
    this.sucursalObtenida = new Catalogo();
    this.catalogoSucursal = new Array<Catalogo>();
    this.estadoObtenido = new Catalogo();
    this.catalogoEstado = new Array<Catalogo>();
    this.transaccionObtenida = new Catalogo();
    this.catalogoTransaccion = new Array<Catalogo>();
    this.CargarCatalogos();// nombre de la funcion que consultara los datos de las sucursales
  }

  ngOnInit(): void {}
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

  public eliminarProducto(producto:Productos): //producto
  void {
    let indice = this.ListadoProductos.indexOf(producto);//extraemos el indice en el array
    console.log('eliminado: ' + indice); //vemos el elemento
    this.TotalVenta = this.TotalVenta.valueOf()-this.ListadoProductos[indice].SubTotalProductoVenta.valueOf();//restamos del gran total el producto eliminado
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
  }
  }

  GuardarVenta() {
   // this.venta.id_usuario = parseInt(sessionStorage.getItem("id_usuario")?.toString());
   //this.consultarNitCliente();
    let idUsuario = sessionStorage.getItem("id_usuario")?.toString();
    this.venta.id_usuario=idUsuario;
   // this.venta.fecha_venta;
    console.log("id usuario es "+idUsuario);
    this.venta.total_venta=parseInt(this.TotalVenta.toString());
    console.log("registro venta "+this.venta.id_cliente);
    this.ventaService.registrarVenta(this.venta,this.detalleVenta).subscribe(
      (res) => {
        const data: any = res;
        if (data  != null) {
          console.log("id del insert es "+data.insertId);
          alert("venta Registrada Exitosamente")
          this.venta.id_venta= data.insertId;
          console.log("IDDDD"+this.venta.id_venta)


          for (let i = 0; i< this.ListadoProductos.length; i++) {
            let curentDetalle:DetalleVenta = new DetalleVenta();
            console.log("2ID: "+this.venta.id_venta)
            curentDetalle.id_venta= this.venta.id_venta;
            curentDetalle.id_producto = parseInt(this.ListadoProductos[i].id_producto.valueOf())
            curentDetalle.cantidad = this.ListadoProductos[i].CantidadProductoVenta.valueOf()
            curentDetalle.total_producto = this.ListadoProductos[i].SubTotalProductoVenta.valueOf()
            this.detalleVenta.push(curentDetalle);
             }
             console.log("detalle de venta "+this.detalleVenta.length);
             this.GuardarDetalleVenta(this.detalleVenta);

         // this.limpiarCampos()
        }else{
          alert("venta no Registrada")
        //  this.limpiarCampos()
        }
      }, (error) => {
                alert('Error al guardar la venta');
              }

    )


  // this.GuardarDetalleVenta(this.detalleVenta);
}



  GuardarDetalleVenta(detalleVentaLista:DetalleVenta[]): void {
    console.log("id detalle de venta "+this.detalleVenta[0].id_venta);
    for (let i = 0; i < detalleVentaLista.length; i++) {
      this.detalleVentaService.registrarDetalleVenta(detalleVentaLista[i]).subscribe(data => {
        if (data  != null) {
          alert("detalle Registrado Exitosamente")
        //  this.limpiarCampos()
        }else{
          alert("detalle no Registrado")
      //    this.limpiarCampos()
        }
        });
    }
  }



  consultarNitCliente(): void {
    this.clienteservice.consultarCliente(this.cliente).subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
            alert('Error al consultar el nit del cliente');
          } else {
            this.venta.id_cliente = data[0].id_cliente,
            alert(data[0].id_cliente+' Este es el id del cliente compadre: '+this.venta.id_cliente );
           // this.cliente.nombre = data[0].nombre,
        //    this.idCliente=data[0].id_cliente,
          //  this.cliente.id_cliente= data[0].id_cliente
            console.log("id cliente es : "+this.idCliente);
          }
        }
        this.GuardarVenta();
      },
      (error) => {
        alert('Error al consultar el cliente');
      }
    );
  }




}
