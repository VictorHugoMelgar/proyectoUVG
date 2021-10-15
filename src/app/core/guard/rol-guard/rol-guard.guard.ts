import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RolGuardGuard implements CanActivate, CanDeactivate<unknown> {
constructor(private authservice:AuthService,private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let permiso=false;
        console.log("guardianes "+ permiso)
   if (this.authservice.autenticado) {
    switch (this.authservice.rol  ) {
      case "administrador":
        permiso=this.direccionCaseAdministrador(this.authservice.destino);
        break;
      case "empleado":
         permiso=this.direccionCaseEmpleado(this.authservice.destino);
        break;

      default:
        break;
    }
    console.log("guardianes 2 "+ permiso)
   }
   if (permiso==false) {
    alert("No posees permisos para ingresar a la ruta");
     this.router.navigateByUrl("/auth/login");
    }
      return permiso;
  }
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let desicion= this.authservice.autenticado=confirm("Desea cerrar la session")
      if (!desicion) {
        this.authservice.rol=""
        this.authservice.destino=""
    }
      return desicion
  }

  direccionCaseAdministrador( destino:String){
    switch (destino) {
      case "menu-administrador":
        return true;
        break;

      default:
        return false
        break;
    }
  }

  direccionCaseEmpleado( destino:String){
    switch (destino) {
      case "menu-empleado":
        return true;
        break;

      default:
        return false
        break;
    }
  }


}
