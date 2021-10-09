export class Productos {
  id_producto: string;
  descripcion: string;
  marca: string;
  existencias: string;
  preciocosto: string;
  precioventa: string;
  nitproveedor: string;
  idsucursal: string;
  idestado: string;
  idtipoproducto: string;
  CantidadProductoVenta:Number;//extra a lo que agrego edwin es para facilitar la gestion de las ventas
  SubTotalProductoVenta:Number;//extra a lo que agrego edwin es para facilitar la gestion de las ventas


  constructor(id_producto = '', descripcion = '', marca = '',  existencias = '', preciocosto= '', precioventa = ''
  , nitproveedor = '', idsucursal = '', idestado = '', idtipoproducto = '',CantidadProductoVenta=0,SubTotalProductoVenta=0){

    this.id_producto = id_producto;
    this.descripcion = descripcion;
    this.marca = marca;
    this.existencias = existencias;
    this.preciocosto = preciocosto;
    this.precioventa = precioventa;
    this.nitproveedor = nitproveedor;
    this.idsucursal = idsucursal;
    this.idestado = idestado;
    this.idtipoproducto = idtipoproducto;
    this.CantidadProductoVenta=CantidadProductoVenta;
    this.SubTotalProductoVenta=SubTotalProductoVenta;
  }
}
