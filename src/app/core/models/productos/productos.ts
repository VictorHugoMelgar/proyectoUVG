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

  constructor(id_producto = '', descripcion = '', marca = '',  existencias = '', preciocosto= '', precioventa = ''
  , nitproveedor = '', idsucursal = '', idestado = '', idtipoproducto = ''){

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

  }
}
