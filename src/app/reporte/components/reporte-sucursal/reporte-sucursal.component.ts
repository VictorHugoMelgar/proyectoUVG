import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { SucursalService } from 'src/app/core/services/sucursal/sucursal.service';
import { Sucursal } from 'src/app/core/models/sucursal/sucursal';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-reporte-sucursal',
  templateUrl: './reporte-sucursal.component.html',
  styleUrls: ['./reporte-sucursal.component.scss']
})
export class ReporteSucursalComponent implements OnInit {
  
  ListadoSucursales:Sucursal[];
  sucursalObtenida:Sucursal;
  
  constructor(private sucursalService:SucursalService) { 
    this.ListadoSucursales=new Array<Sucursal>();
    this.sucursalObtenida=new Sucursal();
    this.consultapd();

  }

  
                        
  public consultapd():void{
    this.sucursalService.consultarSucursalpd().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+"isd"+data[i].length);
              this.sucursalObtenida.nombre = data[i].id_sucursal,
              this.sucursalObtenida.descripcion = data[i].descripcion,
              this.sucursalObtenida.direccion = data[i].direccion,
              this.sucursalObtenida.telefono = data[i].telefono,
              this.sucursalObtenida.correo = data[i].correo,
              this.sucursalObtenida.idEstado = data[i].idEstado,
             
                   
              this.ListadoSucursales.push(this.sucursalObtenida);
              this.sucursalObtenida=new Sucursal();


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
    console.log(this.ListadoSucursales.length)
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
