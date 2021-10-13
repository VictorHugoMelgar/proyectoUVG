import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sucursal } from '../../models/sucursal/sucursal';

@Injectable({
  providedIn: 'root'
})
export class SucursalService {
  sucursal:Sucursal;

  constructor(private http:HttpClient) {
    this.sucursal=new Sucursal;
   }

   registrarSucursal(sucursal:Sucursal){
    const headers = {  };
    const body = {
      nombres:sucursal.nombre,
      descripcion:sucursal.descripcion,
      direccion:sucursal.direccion,
      numero:sucursal.telefono,
      correo:sucursal.correo,
      estado:sucursal.idEstado,
     };

  return this.http.post<any>('http://localhost:3000/sucursal/registrarSucursal', body).pipe(map(resultado =>{
      return resultado
      }))
    }


    consultarSucursal(sucursal:Sucursal){
      return this.http.get('http://localhost:3000/sucursal/consultarSucursal/'+sucursal.nombre)
      .pipe(map(resultado =>{
        return resultado
        }))

      }
    

    actualizarSucursal(sucursal:Sucursal,sucursalConsultado:String){
      const headers = {  };
      const body = {
     //   usuario:usuario.user,
     
        nombres:sucursalConsultado,
        descripcion:sucursal.descripcion,
        direccion:sucursal.direccion,
        numero:sucursal.telefono,
        correo:sucursal.correo,
        estado:sucursal.idEstado,
       };
    return this.http.post<any>('http://localhost:3000/sucursal/actualizarSucursal', body).pipe(map(resultado =>{
        return resultado
        }))
      }
    
      eliminarSucursal(sucursal:Sucursal,sucursalConsultado:String){
        const headers = {  };
        const body = {
          nombres:sucursal.nombre,
         };
      return this.http.post<any>('http://localhost:3000/sucursal/eliminarSucursal', body).pipe(map(resultado =>{
          return resultado
          }))
        }

}