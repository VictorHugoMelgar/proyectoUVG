import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompraRoutingModule } from './compra-routing.module';
import { EliminarCompraComponent } from './components/eliminar-compra/eliminar-compra.component';
import { ActualizarCompraComponent } from './components/actualizar-compra/actualizar-compra.component';
import { ConsultaCompraComponent } from './components/consulta-compra/consulta-compra.component';
import { RegistroCompraComponent } from './components/registro-compra/registro-compra.component';

@NgModule({
  declarations: [
    EliminarCompraComponent,
    ActualizarCompraComponent,
    ConsultaCompraComponent,
    RegistroCompraComponent,
  ],
  imports: [
    CommonModule,
    CompraRoutingModule
  ]
})
export class CompraModule { }
