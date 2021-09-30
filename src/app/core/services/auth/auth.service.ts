import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rol:String="";
  destino:String="";
  autenticado:boolean=false;

  constructor() { }
}
