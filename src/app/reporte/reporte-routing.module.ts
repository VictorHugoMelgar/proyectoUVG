import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReporteSucursalComponent } from './components/reporte-sucursal/reporte-sucursal.component';
import { ReporteVentaComponent } from './components/reporte-venta/reporte-venta.component';

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
        path:"reporte-Venta",
        component:ReporteVentaComponent,
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
