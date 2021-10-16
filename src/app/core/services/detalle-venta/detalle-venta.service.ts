import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DetalleVenta } from '../../models/detalle-venta/detalle-venta';

@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {

  constructor(private http:HttpClient) { }

  registrarDetalleVenta(detalleVenta:DetalleVenta){
    const headers = {  };
    const body = {
      id_venta:detalleVenta.id_venta,
      cantidad:detalleVenta.cantidad,
      id_producto:detalleVenta.id_producto,
      total_producto:detalleVenta.total_producto
     };
  return this.http.post<any>('http://localhost:3000/detalle_venta/registrarDetalleVenta', body).pipe(map(resultado =>{
  return resultado
      }))
    }
    
}
