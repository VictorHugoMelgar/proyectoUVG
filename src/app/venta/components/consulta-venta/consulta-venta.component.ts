import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/core/models/venta/venta';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-consulta-venta',
  templateUrl: './consulta-venta.component.html',
  styleUrls: ['./consulta-venta.component.scss']
})
export class ConsultaVentaComponent implements OnInit {
  ListadoVentas:Venta[];
  ventaObtenida:Venta;
  DisableComponent=false;
  formatoFecha='';
  fecha='';

  constructor(private catalogoService:CatalogoService,private clienteService:ClienteService) {
    this.ListadoVentas=new Array<Venta>();
    this.ventaObtenida=new Venta();
    this.CargarVentas();
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

  public consultarVenta():void{
  this.DisableComponent =!this.DisableComponent;
  }

  ngOnInit(): void {
  }

}
