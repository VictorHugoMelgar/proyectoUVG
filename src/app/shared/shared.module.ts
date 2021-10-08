import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistroProveedorComponent } from './components/proveedor/registro-proveedor/registro-proveedor.component';
import { ProductosComponent } from './components/productos/productos.component';
/*shared module aloja los componentes no principales que se compartiran entre nuestros componentes
principales que en este caso son el administrador y el empledo, hacemos esto para evitar la duplicidad de componentes

Para hacer uso de los componentes alojados en este p´royecto en un menu principal del
empleado o administrador

basta con importar el import
import { SharedModule } from './shared/shared.module';
este import lo agregas al module.ts del componente principal en el que trabajas
(por ejemplo si es empleados buscas empleados.module.ts y ahi lo agregas)
y ajustas la ruta del from por si teda error

mas informacion en :
https://docs.angular.lat/guide/sharing-ngmodules

*/
@NgModule({
  declarations: [
    RegistroProveedorComponent,
    ProductosComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule 
    
  ],
  exports:[
    RegistroProveedorComponent,
    ProductosComponent,

  ]

})
export class SharedModule { }
