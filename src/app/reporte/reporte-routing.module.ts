import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReporteCompraComponent } from './components/reporte-compra/reporte-compra.component';
import { ReporteProductoComponent } from './components/reporte-producto/reporte-producto.component';
import { ReporteProveedorComponent } from './components/reporte-proveedor/reporte-proveedor.component';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
import { ReporteUsuarioComponent } from './components/reporte-usuario/reporte-usuario.component';

const routes: Routes = [
{
  path:'',
  children:[
    {
      path:"reporte-sucursal",
      component:ReporteSucursalComponent,
      //canActivate:[RolGuardGuard]
      },
      {
        path:"reporte-venta",
        component:ReporteVentaComponent,
        //canActivate:[RolGuardGuard]
        },

        {
          path:"reporte-cliente",
          component:ReporteClienteComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"reporte-usuario",
            component:ReporteUsuarioComponent,
            //canActivate:[RolGuardGuard]
            }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
