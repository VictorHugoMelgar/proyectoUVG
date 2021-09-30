import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarCompraComponent } from './components/actualizar-compra/actualizar-compra.component';
import { ConsultaCompraComponent } from './components/consulta-compra/consulta-compra.component';
import { EliminarCompraComponent } from './components/eliminar-compra/eliminar-compra.component';
import { RegistroCompraComponent } from './components/registro-compra/registro-compra.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"registro-compra",
        component:RegistroCompraComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"consulta-compra",
          component:ConsultaCompraComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"actualizar-compra",
            component:ActualizarCompraComponent,
            //canActivate:[RolGuardGuard]
            },
           {
              path:"eliminar-compra",
              component:EliminarCompraComponent,
              //canActivate:[RolGuardGuard]
           },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
