import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  errorMessage: boolean;
  message: string = "";

  constructor(private fb : FormBuilder, private authService : AuthService) { 
    this.loginForm = fb.group({
      email : fb.control("", [Validators.required, Validators.email]),
      password : fb.control("", Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.loginUser(this.loginForm.value, (response:any)=>{
        this.errorMessage = true;
        this.loginForm.reset();
      })
    }
    else{
      this.message = "Fill all the details.";
    }
  }

  public get email(){
    return this.loginForm.get('email') as FormControl;
  }

  public get password(){
    return this.loginForm.get('password') as FormControl;
  }

  public cancel(){
    this.message = "";
  }

}
