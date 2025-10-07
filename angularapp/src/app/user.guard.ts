import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  
  constructor(private router: Router){}
  canActivate(): boolean {
    let role = localStorage.getItem('role');
    if(role == undefined || role != 'user'){
      this.router.navigate(["/error"]);
    }
    return true;
  }
  
}
