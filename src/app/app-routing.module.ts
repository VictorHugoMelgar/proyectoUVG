import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroProveedorComponent } from './shared/components/proveedor/registro-proveedor/registro-proveedor.component';
import { ProductosComponent } from './shared/components/productos/productos.component';

const routes: Routes = [
  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then((m)=>m.AuthModule),
    },
    {path:'Productos',component:ProductosComponent},

    {
      path:'administrador',
      loadChildren:()=>import('./administrador/administrador.module').then((m)=>m.AdministradorModule),
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
