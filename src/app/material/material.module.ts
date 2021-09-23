import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/*
Modulo que importa los objetos de angular material de forma conjunta aqui puede agregar
los objetos html  de material e importarlos a alguno de los modulos principales como el
shared
empleado
administrador

por medio de importar el import
import { MaterialModule } from './material/material.module';
este import lo agregas al module.ts del componente principal en el que trabajas
(por ejemplo si es shared buscas shared.module.ts y ahi lo agregas)
y ajustas la ruta del from por si teda error
*/


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MaterialModule { }
