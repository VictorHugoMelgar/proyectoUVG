import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';


@NgModule({
  declarations: [
    ActualizarProductoComponent,
    EliminarProductoComponent,
    ConsultaProductoComponent,
    RegistroProductoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
