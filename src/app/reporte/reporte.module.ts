import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { MaterialModule } from '../material/material.module';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
<<<<<<< HEAD
=======
import { ReporteCompraComponent } from './components/reporte-compra/reporte-compra.component';
import { ReporteUsuarioComponent } from './components/reporte-usuario/reporte-usuario.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668


@NgModule({
  declarations: [
    ReporteVentaComponent,
<<<<<<< HEAD
    ReporteSucursalComponent
=======
    ReporteSucursalComponent,
    ReporteCompraComponent,
    ReporteUsuarioComponent,
    ReporteClienteComponent
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
  ],
  imports: [
    CommonModule,
    ReporteRoutingModule,
    MaterialModule
  ]
})
export class ReporteModule { }
