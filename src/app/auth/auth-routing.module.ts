import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuardGuard } from '../core/guard/rol-guard/rol-guard.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
 {
   path:'',
   children:[
    {
      path:'',
      redirectTo:'auth/login'
    },
    {
      path:'auth/login',
      component:LoginComponent
    },
    {
      path:'administrador',
      loadChildren:()=>import('./../administrador/administrador.module').then(m=>m.AdministradorModule),
      ///canActivate:[RolGuardGuard],
      //canDeactivate:[RolGuardGuard]
    },
    {
      path:'empleado',
      loadChildren:()=>import('./../empleado/empleado.module').then(m=>m.EmpleadoModule),
     // canActivate:[RolGuardGuard],
      //canDeactivate:[RolGuardGuard]
    },
   ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
