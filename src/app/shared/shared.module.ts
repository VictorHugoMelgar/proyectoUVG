import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/*shared module aloja los componentes no principales que se compartiran entre nuestros componentes
principales que en este caso son el administrador y el empledo, hacemos esto para evitar la duplicidad de componentes

Para hacer uso de los componentes alojados en este p´royecto en un menu principal del
empleado o administrador

basta con importar el import
import { SharedModule } from './shared/shared.module';
este import lo agregas al module.ts del componente principal en el que trabajas
(por ejemplo si es empleados buscas empleados.module.ts y ahi lo agregas)
y ajustas la ruta del from por si teda error
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
