import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Global } from '../global';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // constructor(private http : HttpClient){}

  constructor(private http : HttpClient, private router : Router) { }

  public signUpUser(user : User) : Observable<User>{
    return this.http.post(Global.baseUrl + "/api/register", user) as Observable<User>;
  }

  public sendOtp(email : Object) : Observable<any>{
    return this.http.post(Global.baseUrl + "/api/sendOtp", email) as Observable<any>;
  }

  public verifyOtp(otp : Object) : Observable<any>{
    return this.http.post(Global.baseUrl + "/api/verifyOtp", otp) as Observable<any>;
  }

  public loginUser(user : User, callback : any){
    return this.http.post(Global.baseUrl+"/api/login",user).subscribe((data : any)=>{
      console.log(data);
      localStorage.setItem("jwtToken",data.jwtToken);
      localStorage.setItem("role",data.role);
      localStorage.setItem("username",data.username);
      localStorage.setItem("userId", data.userId);
      this.router.navigate(['/:']);
    },error=>callback(error));
  }

  public getUserById(userId : number) : Observable<User>{
    return this.http.get(Global.baseUrl + "/api/user/" + userId) as Observable<User>;
  }

  public isLoggedIn() : boolean{
    const jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken){
      return true;
    }
    return false;
  }

  public getRole() : string{
    return localStorage.getItem('role');
  }

  public logout() : void{
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
  }

}
