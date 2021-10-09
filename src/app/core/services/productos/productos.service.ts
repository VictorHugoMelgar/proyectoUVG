import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Productos } from '../../models/productos/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  /**
   * Metodo para consultar 1 solo producto
   * @param
   */
  consultarProductos(productos: Productos) {
    return this.http.get('http://localhost:3000/productos/' + productos.id_producto).pipe(
      map((resultado) => {
        return resultado;
      })
    );
  }
  consultarPorExistencias(productos: Productos) {
    return this.http.get('http://localhost:3000/productos/' + productos.id_producto).pipe(
      map((resultado) => {
        return resultado;
      })
    );
  }

  elimnarProductos(productos: Productos) {
    return this.http.delete('http://localhost:3000/productos/' + productos.id_producto).pipe(
      map((resultado) => {
        return resultado;
      })
    );
  }

  registrarProductos(productos: Productos) {
    const headers = {};
    const body = {
      id_producto: productos.id_producto,
      descripcion: productos.descripcion,
      marca: productos.marca,
      existencias: productos.existencias,
      precio_costo: productos.preciocosto,
      precio_venta: productos.precioventa,
      nit_proveedor: productos.nitproveedor,
      id_sucursal: productos.idsucursal,
      id_estado: productos.idestado,
      id_tipo_producto: productos.idtipoproducto,
    };
    return this.http.post<any>('http://localhost:3000/productos/', body).pipe(
      map((resultado) => {
        console.log(resultado);
        return resultado;
      })
    );
  }

  actualizarProductos(productos: Productos) {
    const headers = {};
    const body = {
      id_producto: productos.id_producto,
      descripcion: productos.descripcion,
      marca: productos.marca,
      existencias: productos.existencias,
      precio_costo: productos.preciocosto,
      precio_venta: productos.precioventa,
      nit_proveedor: productos.nitproveedor,
      id_sucursal: productos.idsucursal,
      id_estado: productos.idestado,
      id_tipo_producto: productos.idtipoproducto,
    };
    return this.http
      .put<any>('http://localhost:3000/productos/' + productos.idestado, body)
      .pipe(
        map((resultado) => {
          console.log(resultado)
          return resultado;
        })
      );
}}
