import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolGuardGuard } from '../core/guard/rol-guard/rol-guard.guard';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';

const routes: Routes = [
  {
    path: '',
    component: MenuPrincipalComponent,
   canActivate: [RolGuardGuard],
    canDeactivate: [RolGuardGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
