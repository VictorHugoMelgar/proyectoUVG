import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Cliente } from 'src/app/core/models/cliente/cliente';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
@Component({
  selector: 'app-reporte-cliente',
  templateUrl: './reporte-cliente.component.html',
  styleUrls: ['./reporte-cliente.component.scss']
})
export class ReporteClienteComponent implements OnInit {
  
  ListadoClientes:Cliente[];
  clienteObtenida:Cliente;
    
  constructor(private clienteService:ClienteService) {
    this.ListadoClientes=new Array<Cliente>();
    this.clienteObtenida=new Cliente();
    this.consultapde(); 

  }
  

  public consultapde():void{
    this.clienteService.consultarClientepd().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              
              console.log(i+"isd"+data[i].length);
              this.clienteObtenida.id_cliente = data[i].nit_cliente,
              this.clienteObtenida.nombre = data[i].nombre,
              this.clienteObtenida.apellido = data[i].apellido,              
              this.clienteObtenida.telefono = data[i].telefono,
              this.clienteObtenida.edad = data[i].edad,
              this.clienteObtenida.genero = data[i].genero,
              this.clienteObtenida.correo = data[i].correo,
              this.clienteObtenida.direccion = data[i].direccion,
              this.clienteObtenida.fecha_nacimiento = data[i].fecha_nacimiento,
              this.clienteObtenida.idEstado = data[i].id_estado,
                   
              this.ListadoClientes.push(this.clienteObtenida);
              this.clienteObtenida=new Cliente();

            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }


  ngOnInit(): void {
  }


  public downloadPDF(): void {
    console.log(this.ListadoClientes.length)
    const DATA = document.getElementById('htmlData') as HTMLElement;
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 3
    };
    html2canvas(DATA, options).then((canvas) => {
      const img = canvas.toDataURL('image/PNG');
      // Add image Canvas to PDF
      const bufferX = 15;
      const bufferY = 15;
      const imgProps = (doc as any).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');
      return doc;
    }).then((docResult) => {
      docResult.save('reporteEjemplo.pdf');
    });
  }


}
