import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Global } from 'src/app/global';
// import { error } from 'console';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm : FormGroup;
  user : User = {email :"", password :"", username :"", mobileNumber :"", userRole : ""};
  passwordMismatch : boolean = false;
  otpBox : boolean = false;
  receivedOtp: string = "";
  isAdmin: boolean = false;
  errorMessage: string = "";

  constructor(private fb : FormBuilder, private authService : AuthService, private router: Router) { 
    this.signUpForm = fb.group({
      username : fb.control("", [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
      email : fb.control("", [Validators.required, Validators.pattern(/^[a-zA-Z0-9.#%_]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/)]),
      mobile : fb.control("", [Validators.required, Validators.pattern(/^\d{10}$/)]),
      password : fb.control("", [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]),
      confirmPassword : fb.control("",[Validators.required]),
      role : fb.control("", Validators.required),
      passkey : fb.control("",Validators.required)
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(){
    if( this.username.value == "" || this.email.value == "" || this.mobile.value == "" || 
        this.password.value == "" || this.confirmPassword.value == "" || this.role.value == "" ||
        (this.role.value == "admin" && this.passkey.value == "")){
      this.errorMessage = "Please fill the form first";
      return;
    }
    else{
      if(this.password.value != this.confirmPassword.value){
        this.passwordMismatch = true;
        return;
      }
      if(this.role.value == 'admin' && this.passkey.value != Global.passkey){
        console.log(Global.passkey + " " + this.passkey);
        this.errorMessage = "Invalid Passkey";
        this.passkey.setValue("");
        return;
      }
      this.otpBox = true;
      const email = this.email.value;
      this.authService.sendOtp({email}).subscribe(data=>{
      })
    }
  }

  public onRoleSelect(){
    if(this.role.value == 'admin'){
      this.isAdmin = true;
    }
    else{
      this.isAdmin = false;
    }
  }

  public verify(){
    if(this.receivedOtp != "" && this.receivedOtp.length == 6){
      const otp = this.receivedOtp;
      this.authService.verifyOtp({otp}).subscribe(data=>{
        this.signup();
      })
    }else{
      return;
    }
  }

  public cancel(){
    this.otpBox = false;
    this.errorMessage = "";
  }

  public login(){
    this.errorMessage = "";
    this.router.navigate(["/login"]);
  }

  public signup(){
      this.user = { email: this.email.value,  
                    password : this.password.value, 
                    username : this.username.value, 
                    mobileNumber : this.mobile.value, 
                    userRole : this.role.value}
      this.authService.signUpUser(this.user).subscribe(data=>{
        if(data == null){
          this.otpBox = false;
          this.errorMessage = "Email already exists.";
        }else{
          this.router.navigate(["/login"]);
        }
      })
  }

  public get username(){
    return this.signUpForm.get('username') as FormControl;
  }

  public get email(){
    return this.signUpForm.get('email') as FormControl;
  }

  public get mobile(){
    return this.signUpForm.get('mobile') as FormControl;
  }

  public get password(){
    return this.signUpForm.get('password') as FormControl;
  }

  public get confirmPassword(){
    return this.signUpForm.get('confirmPassword') as FormControl;
  }
  
  public get role(){
    return this.signUpForm.get('role') as FormControl;
  }

  public get passkey(){
    return this.signUpForm.get('passkey') as FormControl;
  }

}
