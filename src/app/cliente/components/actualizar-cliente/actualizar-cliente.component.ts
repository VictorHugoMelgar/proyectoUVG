import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.scss']
})
export class ActualizarClienteComponent implements OnInit {
  public cliente:Cliente;
  clientesObtenidos: Cliente[];
  clienteConsultado:string='';
  formatoFecha:string='';
  fecha:string='';

  constructor(private clienteService:ClienteService) {
    this.cliente=new Cliente();
   this. clientesObtenidos=[]
   }

   consultarCliente(): void {
    this.clienteConsultado=this.cliente.nit;
    this.clienteService.consultarCliente(this.cliente).subscribe(
      (res) => {
        const data: any = res;
        this.clientesObtenidos = data;
        if (this.clientesObtenidos != null) {
          console.log(this.clientesObtenidos);
          if (this.clientesObtenidos.length == 0) {
            alert('Error al consultar el cliente');
            this.limpiarCampos();
          } else {
            console.log(this.clientesObtenidos);
            this.cliente.nombre = data[0].nombre,
            this.cliente.apellido = data[0].apellido,
            this.cliente.nit = data[0].nit_cliente,
            this.cliente.edad = data[0].edad,
            this.cliente.genero = data[0].genero,
            this.cliente.telefono = data[0].telefono,
            this.cliente.direccion = data[0].direccion,
            this.cliente.correo = data[0].correo,
            this.formatoFecha = data[0].fecha_nacimiento,
            this.fecha = this.formatoFecha.substring(0,4)+'-'
            this.fecha = this.fecha + this.formatoFecha.substring(5,7)+'-'
            this.fecha = this.fecha + this.formatoFecha.substring(8,10)
            this.cliente.fecha_nacimiento = this.fecha,
            this.cliente.idEstado = data[0].id_estado
          }
        }
      },
      (error) => {
        alert('Error al consultar el cliente');
      }
    );
  }

  limpiarCampos():void{
    this.cliente=new Cliente();
    this.clienteConsultado='';
  }

  actualizarCliente(): void {
    ????if (this.clienteConsultado!='') {
      this.clienteService.actualizarCliente(this.cliente,this.clienteConsultado).subscribe(data => {
        console.log(data)
        if (data  != null) {
          alert("Cliente Actualizado Exitosamente")
          this.limpiarCampos()
        }else{
          alert("Cliente no Actualizado")
          this.limpiarCampos()
        }
        });
    }else{
      alert('Consulte primero un login_name por favor')
      this.limpiarCampos()
    }
  }

  ngOnInit(): void {
  }

}
