import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule),
    },
    {
      path:'empleado',
      loadChildren:()=>import('./empleado/empleado.module').then((m)=>m.EmpleadoModule),
      },
      {
        path:'shared',
        loadChildren:()=>import('./shared/shared.module').then((m)=>m.SharedModule),
        }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
