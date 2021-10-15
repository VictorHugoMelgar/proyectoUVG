import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalRoutingModule } from './sucursal-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistroSucursalComponent } from './components/registro-sucursal/registro-sucursal.component';
import { ConsultaSucursalComponent } from './components/consulta-sucursal/consulta-sucursal.component';
import { ActualizarSucursalComponent } from './components/actualizar-sucursal/actualizar-sucursal.component';
import { EliminarSucursalComponent } from './components/eliminar-sucursal/eliminar-sucursal.component';


@NgModule({
  declarations: [
    RegistroSucursalComponent,
    ConsultaSucursalComponent,
    ActualizarSucursalComponent,
    EliminarSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalRoutingModule,
    MaterialModule,
    FormsModule,
     HttpClientModule,
  ]
})
export class SucursalModule { }
