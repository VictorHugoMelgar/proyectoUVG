import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarVentaComponent } from './components/actualizar-venta/actualizar-venta.component';
import { ConsultaVentaComponent } from './components/consulta-venta/consulta-venta.component';
import { EliminarVentaComponent } from './components/eliminar-venta/eliminar-venta.component';
import { RegistroVentaComponent } from './components/registro-venta/registro-venta.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"registro-venta",
        component:RegistroVentaComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"consulta-venta",
          component:ConsultaVentaComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"actualizar-venta",
            component:ActualizarVentaComponent,
            //canActivate:[RolGuardGuard]
            },
           {
              path:"eliminar-venta",
              component:EliminarVentaComponent,
              //canActivate:[RolGuardGuard]
           },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentaRoutingModule { }
