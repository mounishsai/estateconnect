import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {

  role : string = "";
  username : string = "";
  confirmLogout : boolean = false;

  constructor(private authService : AuthService, private router : Router) {
    this.role = this.authService.getRole();
    this.username = localStorage.getItem('username');
  }

  ngOnInit(): void {
  }

  public onLogout(){
    this.confirmLogout = true;
  }

  public logout(){
    this.authService.logout();
    this.router.navigate(["/:"]);
  }

  public homeNavigate(){
    this.router.navigate(["/:"]);
  }

  public cancel(){
    this.confirmLogout = false;
  }

}
