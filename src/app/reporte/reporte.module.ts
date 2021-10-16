import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MaterialModule } from '../material/material.module';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
import { ReporteCompraComponent } from './components/reporte-compra/reporte-compra.component';
import { ReporteUsuarioComponent } from './components/reporte-usuario/reporte-usuario.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
import { ReporteProveedorComponent } from './components/reporte-proveedor/reporte-proveedor.component';
import { ReporteProductoComponent } from './components/reporte-producto/reporte-producto.component';


@NgModule({
  declarations: [
    ReporteVentaComponent,
    ReporteSucursalComponent,
    ReporteCompraComponent,
    ReporteUsuarioComponent,
    ReporteClienteComponent,
    ReporteProveedorComponent,
    ReporteProductoComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MaterialModule
  ]
})
export class ReporteModule { }
