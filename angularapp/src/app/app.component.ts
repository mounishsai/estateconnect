import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'angularapp';
    isLoggedIn : boolean = false;
    role : string = "";
    username : string = "";

    constructor(private authService : AuthService) { }

    public get LoggedIn() : boolean{
      this.isLoggedIn = this.authService.isLoggedIn();
      return this.isLoggedIn;
    }

    public get Role() : string{
      this.role = this.authService.getRole();
      return this.role;
    }

}
