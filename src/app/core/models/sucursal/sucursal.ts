export class Sucursal {

  nombre: string;
  descripcion: string;
  direccion: string;
  telefono: string;
  correo: string;
  idEstado: number;

  constructor( nombre = '', descripcion = '', direccion = '', telefono = '',correo = '', idEstado = 0){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.direccion=direccion;
    this.telefono=telefono;
    this.correo=correo;
    this.idEstado = idEstado;

  }


}
