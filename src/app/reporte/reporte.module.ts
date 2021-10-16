import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MaterialModule } from '../material/material.module';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
import { ReporteCompraComponent } from './components/reporte-compra/reporte-compra.component';
import { ReporteUsuarioComponent } from './components/reporte-usuario/reporte-usuario.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';


@NgModule({
  declarations: [
    ReporteVentaComponent,
    ReporteSucursalComponent,
    ReporteCompraComponent,
    ReporteUsuarioComponent,
    ReporteClienteComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MaterialModule
  ]
})
export class ReporteModule { }
