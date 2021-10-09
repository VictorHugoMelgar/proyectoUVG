import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DetalleVenta } from '../../models/detalle-venta/detalle-venta';
import { Venta } from '../../models/venta/venta';
import { DetalleVentaService } from '../detalle-venta/detalle-venta.service';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http:HttpClient,detalleVentaService:DetalleVentaService) {

  }


  consultarVenta(venta:Venta,detalleVenta:DetalleVenta[]=new Array<DetalleVenta>()){

    //  return this.http.get('localhost::3000/usuario/consultarUsuarioLogin/'+usuario.user+'-'+usuario.pass)
    return this.http.get('http://localhost:3000/usuario/consultarUsuarioLogin/'+venta.id_venta)
    .pipe(map(resultado =>{
      return resultado
      }))

    }


    registrarVenta(venta:Venta,detalleVenta:DetalleVenta[]){
      const headers = {  };
      const body = {
        id_cliente:venta.id_cliente,
        fecha_venta:venta.fecha_venta,
        total_venta:venta.total_venta,
        id_estado:venta.id_estado,
        id_tipo_transaccion:venta.id_tipo_transaccion,
        id_usuario:venta.id_usuario,
        id_sucursal:venta.id_sucursal,
       };
    return this.http.post<any>('http://localhost:3000/venta/registrarVenta', body).pipe(map(resultado =>{
    return resultado
        }))
      }


}
