import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router){}
  canActivate(): boolean{
    let role = localStorage.getItem('role');
    if(role == undefined || role != 'admin'){
      this.router.navigate(["/error"]);
    }
    else{
      return true;
    } 
  }
  
}
