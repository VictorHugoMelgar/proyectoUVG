import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario/usuario';
import {HttpClient}from '@angular/common/http'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(private http:HttpClient) {

  }


  consultarUsuarioLogin(usuario:Usuario){

    //  return this.http.get('localhost::3000/usuario/consultarUsuarioLogin/'+usuario.user+'-'+usuario.pass)
    return this.http.get('http://localhost:3000/usuario/consultarUsuarioLogin/'+usuario.user+'-'+usuario.pass)
    .pipe(map(resultado =>{
      return resultado
      }))

    }


    registrarUsuario(usuario:Usuario){
      const headers = {  };
      const body = {
        usuario:usuario.user,
        clave:usuario.pass,
        nombres:usuario.nombre,
        apellidos:usuario.apellido,
        rol:usuario.idRol,
        estado:usuario.idEstado,

       };
    return this.http.post<any>('http://localhost:3000/usuario/registrarUsuario', body).pipe(map(resultado =>{
        return resultado
        }))
      }

      consultarUsuario(usuario:Usuario){
        return this.http.get('http://localhost:3000/usuario/consultarUsuarios/'+usuario.user)
        .pipe(map(resultado =>{
          return resultado
          }))

        }

        consultarUsuariopd(){                                 
          return this.http.get('http://localhost:3000/usuario/consultarUsuariopd/')
          .pipe(map(resultado =>{
            return resultado
            }))
        
          }

        actualizarUsuario(usuario:Usuario,usuarioConsultado:String){
          const headers = {  };
          const body = {
         //   usuario:usuario.user,
            usuario:usuarioConsultado,
            clave:usuario.pass,
            nombres:usuario.nombre,
            apellidos:usuario.apellido,
            rol:usuario.idRol,
            estado:usuario.idEstado,
           };
        return this.http.post<any>('http://localhost:3000/usuario/actualizarUsuario', body).pipe(map(resultado =>{
            return resultado
            }))
          }


         eliminarUsuario(usuario:Usuario,usuarioConsultado:String){
          const headers = {  };
          const body = {
            usuario:usuario.user,
           };
        return this.http.post<any>('http://localhost:3000/usuario/eliminarUsuario', body).pipe(map(resultado =>{
            return resultado
            }))
          }

}
