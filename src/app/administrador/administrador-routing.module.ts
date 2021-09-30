import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

import { EmpleadoModule } from '../empleado/empleado.module';
import { RolGuardGuard } from '../core/guard/rol-guard/rol-guard.guard';
import { LoginComponent } from '../auth/components/login/login.component';

const routes: Routes = [
  {
    path: '',
   children:[
    {
      path: 'menu',
      component: MenuPrincipalComponent,
     // canActivate: [RolGuardGuard],
     // canDeactivate: [RolGuardGuard],
    },
    {
    path:'usuario',
    loadChildren:()=>import('./../usuario/usuario.module').then((m)=>m.UsuarioModule),
  },
 {
  path:'cliente',
  loadChildren:()=>import('./../cliente/cliente.module').then((m)=>m.ClienteModule),
},
{
  path:'proveedor',
  loadChildren:()=>import('./../proveedor/proveedor.module').then((m)=>m.ProveedorModule),
},
{
  path:'sucursal',
  loadChildren:()=>import('./../sucursal/sucursal.module').then((m)=>m.SucursalModule),
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
  {
    path:'reporte',
    loadChildren:()=>import('./../reporte/reporte.module').then((m)=>m.ReporteModule),
    },


   ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministradorRoutingModule {}
