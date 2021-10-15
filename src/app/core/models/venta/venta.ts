export class Venta {
  id_venta:String;
  nit:String;
  id_cliente:number;
  fecha_venta:String;
  nombre_cliente:String;//vairables utiles en la consulta de la venta pero que no conforman la estructura de la table en la db
  direccion_cliente:String;//vairables utiles en la consulta de la venta pero que no conforman la estructura de la table en la db
  total_venta:number;
  id_estado:number;
  id_tipo_transaccion:number;
  id_usuario?:String;
  id_sucursal:number

  constructor(id_venta = '',nit='', id_cliente = 0, fecha_venta = '', nombre_cliente = '', direccion_cliente = '', id_tipo_transaccion=0,id_usuario = "",total_venta=0,id_estado = 0,id_sucursal=0){
    this.id_venta = id_venta;
    this.nit = nit;
    this.id_cliente = id_cliente;
    this.fecha_venta = fecha_venta;
    this.nombre_cliente = nombre_cliente;
    this.direccion_cliente=direccion_cliente;
    this.total_venta = total_venta;
    this.id_estado = id_estado;
    this.id_tipo_transaccion = id_tipo_transaccion;
    this.id_usuario = id_usuario;
    this.id_sucursal = id_sucursal;
  }
}
