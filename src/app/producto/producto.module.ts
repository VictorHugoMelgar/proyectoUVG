import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
=======

>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
import { ProductoRoutingModule } from './producto-routing.module';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';
<<<<<<< HEAD
import { MaterialModule } from '../material/material.module';
=======

>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668

@NgModule({
  declarations: [
    ActualizarProductoComponent,
    EliminarProductoComponent,
    ConsultaProductoComponent,
    RegistroProductoComponent
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    
    ProductoRoutingModule,
    HttpClientModule,
    FormsModule ,
    MaterialModule,
=======
    ProductoRoutingModule
>>>>>>> 3aea6cce2d5bbe875d2cbfdd6dbc04326690b668
  ]
})
export class ProductoModule { }
