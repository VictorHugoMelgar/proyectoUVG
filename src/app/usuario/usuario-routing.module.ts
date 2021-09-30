import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './components/actualizar-usuario/actualizar-usuario.component';
import { ConsultaUsuarioComponent } from './components/consulta-usuario/consulta-usuario.component';
import { EliminarUsuarioComponent } from './components/eliminar-usuario/eliminar-usuario.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

const routes: Routes = [
  {
  path:'',
  children:[
    {
      path:"registro-usuario",
      component:RegistroUsuarioComponent,
      //canActivate:[RolGuardGuard]
      },
      {
        path:"consulta-usuario",
        component:ConsultaUsuarioComponent,
        //canActivate:[RolGuardGuard]
        },
        {
          path:"actualizar-usuario",
          component:ActualizarUsuarioComponent,
          //canActivate:[RolGuardGuard]
          },
         {
            path:"eliminar-usuario",
            component:EliminarUsuarioComponent,
            //canActivate:[RolGuardGuard]
         },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
