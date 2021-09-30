import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 //material
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { MatCardModule } from '@angular/material/card';
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatIconModule} from '@angular/material/icon';
 import {MatButtonModule} from '@angular/material/button';
 import {MatMenuModule} from '@angular/material/menu';

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
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
    exports: [
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ]
})
export class MaterialModule { }
