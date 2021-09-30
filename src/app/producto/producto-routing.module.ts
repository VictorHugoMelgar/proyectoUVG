import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { ConsultaProductoComponent } from './components/consulta-producto/consulta-producto.component';
import { EliminarProductoComponent } from './components/eliminar-producto/eliminar-producto.component';
import { RegistroProductoComponent } from './components/registro-producto/registro-producto.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"registro-producto",
        component:RegistroProductoComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"consulta-producto",
          component:ConsultaProductoComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"actualizar-producto",
            component:ActualizarProductoComponent,
            //canActivate:[RolGuardGuard]
            },
           {
              path:"eliminar-producto",
              component:EliminarProductoComponent,
              //canActivate:[RolGuardGuard]
           },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
