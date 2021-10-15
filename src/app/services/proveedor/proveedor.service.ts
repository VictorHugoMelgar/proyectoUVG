import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proveedor } from '../../models/proveedor/proveedor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  constructor(private http: HttpClient) {}

  /**
   * Metodo para consultar 1 solo cliente
   * @param
   */
  consultarProveedor(proveedor: Proveedor) {
    return this.http.get('http://localhost:3001/proveedor/' + proveedor.nit).pipe(
      map((resultado) => {
        return resultado;
      })
    );
  }
  elimnarProveedor(proveedor: Proveedor) {
    return this.http.delete('http://localhost:3001/proveedor/' + proveedor.nit).pipe(
      map((resultado) => {
        return resultado;
      })
    );
  }

  registrarProveedor(proveedor: Proveedor) {
    const headers = {};
    const body = {
      nit: proveedor.nit,
      nombre: proveedor.nombre,
      apellido: proveedor.apellido,
      direccion: proveedor.direccion,
      correo: proveedor.correo,
      telefono: proveedor.telefono,
    };
    return this.http.post<any>('http://localhost:3001/proveedor/', body).pipe(
      map((resultado) => {
        console.log(resultado);
        return resultado;
      })
    );
  }
  
  actualizarProveedor(proveedor: Proveedor) {
    const headers = {};
    const body = {
      nombre: proveedor.nombre,
      apellido: proveedor.apellido,
      direccion: proveedor.direccion,
      correo: proveedor.correo,
      telefono: proveedor.telefono,
    };
    return this.http
      .put<any>('http://localhost:3001/proveedor/' + proveedor.nit, body)
      .pipe(
        map((resultado) => {
          console.log(resultado)
          return resultado;
        })
      );
  }
}