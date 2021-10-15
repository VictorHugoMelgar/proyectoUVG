export class Sucursal {
  nombre: string;
  descripcion: string;
  telefono: string;
  direccion: string;
  correo: string;
  idEstado: number;

  constructor( nombre = '', descripcion = '', telefono = '', direccion = '',correo = '', idEstado = 0){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.telefono=telefono;
    this.direccion=direccion;
    this.correo=correo;
    this.idEstado = idEstado;

  }

}
