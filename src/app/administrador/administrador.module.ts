import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorRoutingModule } from './administrador-routing.module';
import { MenuPrincipalComponent } from './components/menu-principal/menu-principal.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    MenuPrincipalComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
   SharedModule
  ]
})
export class AdministradorModule { }
