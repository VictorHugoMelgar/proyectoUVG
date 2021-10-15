import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarSucursalComponent } from './components/actualizar-sucursal/actualizar-sucursal.component';
import { ConsultaSucursalComponent } from './components/consulta-sucursal/consulta-sucursal.component';
import { EliminarSucursalComponent } from './components/eliminar-sucursal/eliminar-sucursal.component';
import { RegistroSucursalComponent } from './components/registro-sucursal/registro-sucursal.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"registro-sucursal",
        component:RegistroSucursalComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"consulta-sucursal",
          component:ConsultaSucursalComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"actualizar-sucursal",
            component:ActualizarSucursalComponent,
            //canActivate:[RolGuardGuard]
            },
           {
              path:"eliminar-sucursal",
              component:EliminarSucursalComponent,
              //canActivate:[RolGuardGuard]
           },
]
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalRoutingModule { }
