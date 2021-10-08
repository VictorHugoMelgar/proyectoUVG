import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/core/models/catalogo/catalogo';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';

@Component({
  selector: 'app-registro-venta',
  templateUrl: './registro-venta.component.html',
  styleUrls: ['./registro-venta.component.scss']
})
export class RegistroVentaComponent implements OnInit {
  //CurentProducto:;
  ListadoProductos=[];
  TotalVenta:Number=0;
  cliente:Cliente;
  catalogoSucursal:Catalogo[];
  sucursalObtenida:Catalogo;
  catalogoEstado:Catalogo[];
  estadoObtenido:Catalogo;
  catalogoTransaccion:Catalogo[];
  transaccionObtenida:Catalogo;


  constructor(private catalogoService:CatalogoService) {
    this.cliente= new Cliente();
    this.sucursalObtenida= new Catalogo();
    this.catalogoSucursal=new Array<Catalogo>();
    this.estadoObtenido= new Catalogo();
    this.catalogoEstado=new Array<Catalogo>();
    this.transaccionObtenida= new Catalogo();
    this.catalogoTransaccion=new Array<Catalogo>();
    this.CargarCatalogos();
  }

  ngOnInit(): void {
  }
  public CargarCatalogos():void{
this.CatSucursal();
this.CatTransaccion();
this.CatEstado();
  }

  public CatSucursal():void{
    this.catalogoService.consultarCatalogoSucursal().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);
              this.sucursalObtenida.id = data[i].id_sucursal,
              this.sucursalObtenida.descripcion = data[i].descripcion,
              this.catalogoSucursal.push(this.sucursalObtenida);
              this.sucursalObtenida=new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  public CatEstado():void{
    this.catalogoService.consultarCatalogoEstado().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);
              this.estadoObtenido.id = data[i].id_estado,
              this.estadoObtenido.descripcion = data[i].descripcion,
              this.catalogoEstado.push(this.estadoObtenido);
              this.estadoObtenido=new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }

  public CatTransaccion():void{
    this.catalogoService.consultarCatalogoTipoTransaccion().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo saucursal")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);
              this.transaccionObtenida.id = data[i].id_tipo_transaccion,
              this.transaccionObtenida.descripcion = data[i].descripcion,
              this.catalogoTransaccion.push(this.transaccionObtenida);
              this.transaccionObtenida=new Catalogo();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }




  public eliminarProducto(
    //producto
    ):void{
    let indice =1// this.ListadoProductos.indexOf(producto);//extraemos el indice en el array
    console.log("eliminado: "+indice);//vemos el elemento
    this.ListadoProductos.splice(indice,1)//eliminar elemento
    }



    AgregarProducto(){
      console.log("sucursales")
      for (let i = 0; i < this.catalogoSucursal.length; i++) {
        console.log(i+" "+this.catalogoSucursal[i].descripcion);
      }
    }

    GuardarVenta(){

    }
}
