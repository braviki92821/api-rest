import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
  })
export class guard implements CanActivate {

    constructor(private route:Router){}
    canActivate(): boolean {
      let auth:boolean
      let token=localStorage.getItem('token') || '';
      if(token.length>0){
         auth=true
      }else{
        auth=false;
        this.route.navigate(['/']);
      }
      return auth
    }

}