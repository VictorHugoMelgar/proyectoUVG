import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { UsuarioService } from 'src/app/core/services/usuario/usuario.service';
import { Usuario } from 'src/app/core/models/usuario/usuario';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrls: ['./reporte-usuario.component.scss']
})
export class ReporteUsuarioComponent implements OnInit {
  ListadoUsuarios:Usuario[];
  usuarioObtenida:Usuario;

  constructor(private usuarioService:UsuarioService) { 
    this.ListadoUsuarios=new Array<Usuario>();
    this.usuarioObtenida=new Usuario();
    this.consultapd();
  }
  
  public consultapd():void{
    this.usuarioService.consultarUsuariopd().subscribe(
      (res) => {
        const data: any = res;
        if (data != null) {
          if (data.length == 0) {
    console.log("error catalogo estado")
          } else {
            for (let i = 0; i < data.length; i++) {
              console.log(i+"isd"+data[i].length);
           
              this.usuarioObtenida.user = data[i].login_name,
              this.usuarioObtenida.pass = data[i].password,
              this.usuarioObtenida.nombre = data[i].nombre,
              this.usuarioObtenida.apellido = data[i].apellido,
              this.usuarioObtenida.idRol = data[i].id_rol,
              this.usuarioObtenida.idEstado = data[i].id_estado,
             
                   
              this.ListadoUsuarios.push(this.usuarioObtenida);
              this.usuarioObtenida=new Usuario();


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
    console.log(this.ListadoUsuarios.length)
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
