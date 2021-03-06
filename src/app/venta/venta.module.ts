import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaRoutingModule } from './venta-routing.module';
import { RegistroVentaComponent } from './components/registro-venta/registro-venta.component';
import { ConsultaVentaComponent } from './components/consulta-venta/consulta-venta.component';
import { ActualizarVentaComponent } from './components/actualizar-venta/actualizar-venta.component';
import { EliminarVentaComponent } from './components/eliminar-venta/eliminar-venta.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistroVentaComponent,
    ConsultaVentaComponent,
    ActualizarVentaComponent,
    EliminarVentaComponent
  ],
  imports: [
    CommonModule,
    VentaRoutingModule,
    MaterialModule,
    FormsModule

  ]
})
export class VentaModule { }
