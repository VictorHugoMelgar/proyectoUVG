import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario';
import {HttpClient}from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private http:HttpClient) {
  }

  consultarCatalogoSucursal(){
    return this.http.get('http://localhost:3000/catalogos/consultarCatalogoSucursal')
    .pipe(map(resultado =>{
      return resultado
      }))

    }

    consultarCatalogoVentas(){
      return this.http.get('http://localhost:3000/catalogos/consultarCatalogoVentas')
      .pipe(map(resultado =>{
        return resultado
        }))

      }
      consultarCatalogoCompras(){
        return this.http.get('')
        .pipe(map(resultado =>{
          return resultado
          }))

        }
        consultarCatalogoEstado(){
          return this.http.get('http://localhost:3000/catalogos/consultarCatalogoEstado')
          .pipe(map(resultado =>{
            return resultado
            }))

          }
          consultarCatalogoTipoTransaccion(){
            return this.http.get('http://localhost:3000/catalogos/consultarCatalogoTransaccion')
            .pipe(map(resultado =>{
              return resultado
              }))

            }
            consultarCatalogoUsuarios(){
              return this.http.get('http://localhost:3000/catalogos/consultarCatalogoUsuario')
              .pipe(map(resultado =>{
                return resultado
                }))

              }

}
