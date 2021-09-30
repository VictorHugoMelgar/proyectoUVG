import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedorRoutingModule } from './proveedor-routing.module';
import { RegistroProveedorComponent } from './components/registro-proveedor/registro-proveedor.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EliminarProveedorComponent } from './components/eliminar-proveedor/eliminar-proveedor.component';
import { ActualizarProveedorComponent } from './components/actualizar-proveedor/actualizar-proveedor.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';


@NgModule({
  declarations: [
    RegistroProveedorComponent,
    EliminarProveedorComponent,
    ActualizarProveedorComponent,
    ConsultaProveedorComponent
  ],
  imports: [
    CommonModule,
    ProveedorRoutingModule,
    MaterialModule,
    FormsModule,
     HttpClientModule,
  ]
})
export class ProveedorModule { }
