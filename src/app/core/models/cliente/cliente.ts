export class Cliente {
    nombre: string;
    apellido: string;
    nit: string;
    telefono: string;
    edad: number;
    genero: number;
    correo: string;
    fecha_nacimiento: string;
    direccion: string;
    idEstado: number;

    constructor( nombre = '', apellido = '',nit = '', telefono = '',edad = 0,correo = '',genero = 0,fecha_nacimiento = '',direccion = '', idEstado = 0){
      this.nombre = nombre;
      this.apellido = apellido;
      this.nit=nit;
      this.telefono=telefono;
      this.edad=edad;
      this.genero=genero;
      this.fecha_nacimiento=fecha_nacimiento;
      this.direccion=direccion;
      this.idEstado = idEstado;
      this.correo=correo;
    }
}
