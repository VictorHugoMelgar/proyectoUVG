import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

import { EmpleadoModule } from '../empleado/empleado.module';

const routes: Routes = [
  {
    path:'',
    component:MenuPrincipalComponent,
   // component:EmpleadoModule,
    },

  {
    path:'administrador/empleados',
    component:EmpleadoModule,
    },
    {
      path:'administrador/menu',
      component:MenuPrincipalComponent,
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule {

}
