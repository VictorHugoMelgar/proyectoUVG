import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuardGuard } from '../core/guard/rol-guard/rol-guard.guard';
import { ActualizarProveedorComponent } from './components/actualizar-proveedor/actualizar-proveedor.component';
import { ConsultaProveedorComponent } from './components/consulta-proveedor/consulta-proveedor.component';
import { EliminarProveedorComponent } from './components/eliminar-proveedor/eliminar-proveedor.component';
import { RegistroProveedorComponent } from './components/registro-proveedor/registro-proveedor.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:"registro-proveedor",
        component:RegistroProveedorComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"consulta-proveedor",
          component:ConsultaProveedorComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"actualizar-proveedor",
            component:ActualizarProveedorComponent,
            //canActivate:[RolGuardGuard]
            },
           {
              path:"eliminar-proveedor",
              component:EliminarProveedorComponent,
              //canActivate:[RolGuardGuard]
           },
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProveedorRoutingModule { }
