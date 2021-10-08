export class Proveedor {
    nit: string;
    nombre: string;
    apellido: string;
    direccion: string;
    correo: string;
    telefono: string;
  
    constructor(nit = '', nombre = '', apellido = '',  direccion = '', correo= '', telefono = ''){
      this.nit = nit;
      this.nombre = nombre;
      this.apellido = apellido;
      this.direccion = direccion;
      this.correo = correo;
      this.telefono = telefono;
      
    }
  }