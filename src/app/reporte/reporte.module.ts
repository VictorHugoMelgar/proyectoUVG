import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ReporteVentaComponent
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MaterialModule
  ]
})
export class ReporteModule { }
