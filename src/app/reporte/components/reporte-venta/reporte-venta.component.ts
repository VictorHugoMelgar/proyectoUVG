import { Component, OnInit } from '@angular/core';
import { Venta } from 'src/app/core/models/venta/venta';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

@Component({
  selector: 'app-reporte-venta',
  templateUrl: './reporte-venta.component.html',
  styleUrls: ['./reporte-venta.component.scss']
})

export class ReporteVentaComponent implements OnInit {
  ListadoVentas:Venta[];
  ventaObtenida:Venta;
  formatoFecha: any;
  fecha: string='';

  constructor(private catalogoService:CatalogoService,private clienteService:ClienteService) {
    this.ListadoVentas=new Array<Venta>();
    this.ventaObtenida=new Venta();
    this.CargarVentas();
   }

   DescargarReporte(){

   }
   public CargarVentas():void{
    this.catalogoService.consultarCatalogoVentas().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);

              this.ventaObtenida.id_venta = data[i].id_venta,
              this.ventaObtenida.id_cliente = data[i].id_cliente,
             // this.ventaObtenida.fecha_venta = data[i].fecha_venta,
              this.formatoFecha = data[0].fecha_venta,
              this.fecha = this.formatoFecha.substring(0,4)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(5,7)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(8,10)
              this.ventaObtenida.fecha_venta = this.fecha,
              this.ventaObtenida.nombre_cliente = data[i].nombre_cliente,
              this.ventaObtenida.direccion_cliente = data[i].direccion_cliente,
              this.ventaObtenida.total_venta = data[i].total_venta,
              this.ventaObtenida.id_estado = data[i].id_estado,
              this.ventaObtenida.id_tipo_transaccion = data[i].id_tipo_transaccion,
              this.ventaObtenida.id_usuario = data[i].id_usuario,
              this.ventaObtenida.id_sucursal = data[i].nombre_sucursal,
              this.ventaObtenida.nit = data[i].nit_cliente,
              console.log("nit "+data[i].nit_cliente)
              this.ListadoVentas.push(this.ventaObtenida);
              this.ventaObtenida=new Venta();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }



  public downloadPDF(): void {
   /*
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
    }).then((docResult) => {docResult.save('reporteEjemplo.pdf'); });
*/
  }



  ngOnInit(): void {
  }

  }


