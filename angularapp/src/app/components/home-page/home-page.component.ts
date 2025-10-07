import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  isLoggedIn : boolean = false;
  displayPopUp : boolean = false;
  searchItem: string = "";
  bgImages: any[] = [];
  bgImage: any;
  imageIndex: number = 0;

  constructor(private authService : AuthService, private router : Router) { 
    this.bgImages.push(`BgImage1.avif`);
    this.bgImages.push(`BgImage.jpg`);
    this.bgImages.push(`BgImage5.jpg`)
    this.bgImages.push(`pngtree-digital-depiction-of-a-real-estate-website-featuring-an-isolated-3d-image_3618583.jpg`);

    this.bgImage = this.bgImages[this.imageIndex];
    setInterval(()=>{
      if(this.imageIndex == this.bgImages.length){
        this.imageIndex = 0;
      }
      this.bgImage = this.bgImages[this.imageIndex];
      ++this.imageIndex;
    },3000)
  }

  ngOnInit(): void {
    this.LoggedIn();
    // setInterval(() => {
    //   this.nextImage();
    // }, 3000);
  }

  
  public nextImage(): void {
    this.imageIndex = (this.imageIndex + 1) % this.bgImages.length;
  }

  
  public getTransform(): string {
    return `translateX(-${this.imageIndex * 100}%)`;
  }

  public search(){
    if(this.searchItem != ''){
      this.router.navigate(["/user/viewProp"],{queryParams:{search: this.searchItem}});
    }
  }

  public LoggedIn() : boolean{
    this.isLoggedIn = this.authService.isLoggedIn();
    if(this.isLoggedIn == false){
      setTimeout(()=>{
        this.PopUp;
      },15000);
    }
    return this.isLoggedIn;
  }

  public get PopUp(){
    this.displayPopUp = true;
    return true;
  }

  public signup(){
    this.router.navigate(["/signup"]);
  }

  public cancel(){
    this.displayPopUp = false;
  } 

  public cardNavigate(id:number){
    if(id == 1)
      this.router.navigate(["/user/viewProp"]);
    else if(id == 2)
      this.router.navigate(["/agents"]);
    else if(id == 3)
      this.router.navigate(["/user/viewProp"]);
    else
      this.router.navigate([""]);
  }

}

