import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MaterialModule } from '../material/material.module';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';


@NgModule({
  declarations: [
    ReporteVentaComponent,
    ReporteSucursalComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MaterialModule
  ]
})
export class ReporteModule { }
