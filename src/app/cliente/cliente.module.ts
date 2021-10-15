import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClienteRoutingModule } from './cliente-routing.module';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    EliminarClienteComponent,
    RegistroClienteComponent,
    ConsultaClienteComponent,
    ActualizarClienteComponent,
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    MaterialModule,
    FormsModule,
     HttpClientModule,
  ]
})
export class ClienteModule { }
