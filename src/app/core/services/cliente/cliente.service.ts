import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Cliente } from '../../models/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  cliente:Cliente;

  constructor(private http:HttpClient) {
    this.cliente=new Cliente;
   }


  consultarCliente(cliente:Cliente){
    const nit_cliente=cliente.nit
    console.log(nit_cliente)
    return this.http.get('http://localhost:3000/cliente/consultarCliente/'+cliente.nit)
    .pipe(map(resultado =>{
    return resultado
    }))

}





registrarCliente(cliente:Cliente){
  const headers = {  };
  const body = {
    nombres:cliente.nombre,
    apellidos:cliente.apellido,
    numero:cliente.telefono,
    genero:cliente.genero,
    edad:cliente.edad,
    direccion:cliente.direccion,
    nit:cliente.nit,
    fechaNac:cliente.fecha_nacimiento,
    correo:cliente.correo,
    estado:cliente.idEstado,
   };
return this.http.post<any>('http://localhost:3000/cliente/registrarCliente', body).pipe(map(resultado =>{
    return resultado
    }))
  }


  actualizarCliente(cliente:Cliente,clienteConsultado:String){
   // console.log(clienteConsultado);
    const headers = {  };
    const body = {
   //   usuario:usuario.user,
   nit:clienteConsultado,
   nombres:cliente.nombre,
   apellidos:cliente.apellido,
   numero:cliente.telefono,
   genero:cliente.genero,
   edad:cliente.edad,
   direccion:cliente.direccion,
   fechaNac:cliente.fecha_nacimiento,
   correo:cliente.correo,
   estado:cliente.idEstado,
     };
  return this.http.post<any>('http://localhost:3000/cliente/actualizarCliente', body).pipe(map(resultado =>{
      return resultado
      }))
    }


  eliminarUsuario(cliente:Cliente){
    const headers = {  };
    const body = {
    nit:cliente.nit,
     };
  return this.http.post<any>('http://localhost:3000/cliente/eliminarCliente', body).pipe(map(resultado =>{
      return resultado
      }))
    }


}
