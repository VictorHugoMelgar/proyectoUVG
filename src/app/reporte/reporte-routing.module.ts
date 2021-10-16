import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';
import { ReporteCompraComponent } from './components/reporte-compra/reporte-compra.component';
import { ReporteProductoComponent } from './components/reporte-producto/reporte-producto.component';
import { ReporteProveedorComponent } from './components/reporte-proveedor/reporte-proveedor.component';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
import { ReporteUsuarioComponent } from './components/reporte-usuario/reporte-usuario.component';
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
<<<<<<< HEAD

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
=======
        {
          path:"reporte-usuario",
          component:ReporteUsuarioComponent,
          //canActivate:[RolGuardGuard]
          },
          {
            path:"reporte-cliente",
            component:ReporteClienteComponent,
            //canActivate:[RolGuardGuard]
            },
            {
              path:"reporte-producto",
              component:ReporteProductoComponent,
              //canActivate:[RolGuardGuard]
              },
              {
                path:"reporte-proveedor",
                component:ReporteProveedorComponent,
                //canActivate:[RolGuardGuard]
                },
                {
                  path:"reporte-compra",
                  component:ReporteCompraComponent,
                  //canActivate:[RolGuardGuard]
                  }
      ]
>>>>>>> a53b20b14d7a700896998fe438af8cfd6cd8fb34
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
