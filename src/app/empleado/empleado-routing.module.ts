import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuardGuard } from '../core/guard/rol-guard/rol-guard.guard';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  {
    /*
    path: '',
    component: MenuPrincipalComponent,
   canActivate: [RolGuardGuard],
    canDeactivate: [RolGuardGuard],
    */
    path: '',
   children:[
    {
      path: 'menu',
      component: MenuPrincipalComponent,
     // canActivate: [RolGuardGuard],
     // canDeactivate: [RolGuardGuard],
    },
 {
  path:'cliente',
  loadChildren:()=>import('./../cliente/cliente.module').then((m)=>m.ClienteModule),
},
{
  path:'producto',
  loadChildren:()=>import('./../producto/producto.module').then((m)=>m.ProductoModule),
},
{
path:'venta',
loadChildren:()=>import('./../venta/venta.module').then((m)=>m.VentaModule),
},
{
  path:'compra',
  loadChildren:()=>import('./../compra/compra.module').then((m)=>m.CompraModule),
  },

   ]

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
