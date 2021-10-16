import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
//import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
//import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {
public cliente:Cliente
  constructor(private clienteService:ClienteService) {
    this.cliente=new Cliente();
   }


   registrarCliente(): void {
if(this.cliente.nombre != null && this.cliente.apellido != null &&
  this.cliente.genero != 0 &&  this.cliente.edad != null && 
  this.cliente.edad > 0  && this.cliente.direccion != null &&
  this.cliente.fecha_nacimiento != null  &&   this.cliente.idEstado !=0){
    this.clienteService.registrarCliente(this.cliente).subscribe(data => {
      if (data  != null) {
        alert("Cliente Registrado Exitosamente")
     //   this.limpiarCampos()
      }else{
        alert("Cliente no Registrado")
      //  this.limpiarCampos()
      }
      });

  }else{
    alert("Los campos faltantes son obligatorios (*)")
}
  }

  limpiarCampos():void{
    this.cliente=new Cliente();
  }




  ngOnInit(): void {
  }

}
