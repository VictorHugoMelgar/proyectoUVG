import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/core/models/usuario/usuario';
import { CatalogoService } from 'src/app/core/services/catalogo/catalogo.service';
import { ClienteService } from 'src/app/core/services/cliente/cliente.service';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.scss']
})

export class ReporteUsuarioComponent implements OnInit {
  ListadoUsuarios:Usuario[];
  UsuarioObtenida:Usuario;
  formatoFecha: any;
  fecha: string='';

  constructor(private catalogoService:CatalogoService,private clienteService:ClienteService) {
    this.ListadoUsuarios=new Array<Usuario>();
    this.UsuarioObtenida=new Usuario();
    this.CargarUsuarios();
   }

   DescargarReporte(){

   }
   public CargarUsuarios():void{
    this.catalogoService.consultarCatalogoUsuarios().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo Usuario")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+" "+data[i].descripcion);
              this.UsuarioObtenida.id_usuario = data[i].id_Usuario,
              //this.UsuarioObtenida. = data[i].id_cliente,
             // this.UsuarioObtenida.fecha_Usuario = data[i].fecha_Usuario,
              this.formatoFecha = data[0].fecha_Usuario,
              this.fecha = this.formatoFecha.substring(0,4)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(5,7)+'-'
              this.fecha = this.fecha + this.formatoFecha.substring(8,10)
            //  this.UsuarioObtenida.fecha_Usuario = this.fecha,
             // this.UsuarioObtenida.nombre_cliente = data[i].nombre_cliente,
            //  this.UsuarioObtenida.direccion_cliente = data[i].direccion_cliente,
            //  this.UsuarioObtenida.total_Usuario = data[i].total_Usuario,
           //   this.UsuarioObtenida.id_estado = data[i].id_estado,
           //   this.UsuarioObtenida.id_tipo_transaccion = data[i].id_tipo_transaccion,
            //  this.UsuarioObtenida.id_usuario = data[i].id_usuario,
            //  this.UsuarioObtenida.id_sucursal = data[i].nombre_sucursal,
            //  this.UsuarioObtenida.nit = data[i].nit_cliente,
              console.log("nit "+data[i].nit_cliente)
              this.ListadoUsuarios.push(this.UsuarioObtenida);
              this.UsuarioObtenida=new Usuario();
            }
          }
        }
      },
      (error) => {
        alert('Error al consultar el usuario');
      }
    );
  }



/*
  public downloadPDF(): void {
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
  }


*/
  ngOnInit(): void {
  }

  }


