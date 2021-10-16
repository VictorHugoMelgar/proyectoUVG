export class DetalleVenta {
  id_detalle_venta: number;
  id_venta: number;
  id_producto: number;
  cantidad: number;
  precio_venta: number;
  total_producto: number;

  constructor(
    id_detalle_venta = 0,
    id_venta = 0,
    id_producto = 0,
    cantidad = 0,
    precio_venta = 0,
    total_producto = 0
  ) {
    this.id_detalle_venta = id_detalle_venta;
    this.id_venta = id_venta;
    this.id_producto = id_producto;
    this.cantidad = cantidad;
    this.precio_venta = precio_venta;
    this.total_producto = total_producto;
  }
}
