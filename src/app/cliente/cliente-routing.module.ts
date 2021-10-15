import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { ConsultaClienteComponent } from './components/consulta-cliente/consulta-cliente.component';
import { EliminarClienteComponent } from './components/eliminar-cliente/eliminar-cliente.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';

const routes: Routes = [
  {path:'',
children:[
  {
    path:"registro-cliente",
    component:RegistroClienteComponent,
    //canActivate:[RolGuardGuard]
    },
    {
      path:"consulta-cliente",
      component:ConsultaClienteComponent,
      //canActivate:[RolGuardGuard]
      },
      {
        path:"actualizar-cliente",
        component:ActualizarClienteComponent,
        //canActivate:[RolGuardGuard]
        },
       {
          path:"eliminar-cliente",
          component:EliminarClienteComponent,
          //canActivate:[RolGuardGuard]
       },


]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
