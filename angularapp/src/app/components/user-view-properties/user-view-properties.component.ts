import { Component, OnInit } from '@angular/core';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';
import { Global } from 'src/app/global';
import { PropertyImage } from 'src/app/models/propertyImage.model';
import { ImageService } from 'src/app/services/imageService.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view-properties',
  templateUrl: './user-view-properties.component.html',
  styleUrls: ['./user-view-properties.component.css']
})
export class UserViewPropertiesComponent implements OnInit {

  uViewProp:Property[]=[]
  photos:PropertyImage[]=[];
  displayProperties: any[] = [];
  displayProperty: any = {propertyId: 0, title: "", location: "", price : 0, images: []}
  searchProp:string="";
  filtyp:string="";
  selectedPrice:number;
  minPrice:number=3000000;
  maxPrice:number=20000000;

  constructor(private service:PropertyService, private imageService : ImageService, private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.searchProp = this.activatedRoute.snapshot.queryParamMap.get('search');
    if(this.searchProp==null){
      this.service.getAllProperties().subscribe(data=>{
        this.uViewProp=data;
        for(let prop of this.uViewProp){
          const displayProperty: any = {propertyId: prop.propertyId, 
                                        title: prop.title, 
                                        location: prop.location, 
                                        price : prop.price, 
                                        images: []}
          this.imageService.getAllPathsForTitle(prop.title).subscribe(dt=>{
            displayProperty.images = dt;
            this.displayProperties.push(displayProperty);
          })
        }   
      })
    }else{
      this.service.getAllProperties().subscribe(data=>{
        this.uViewProp=data;
        for(let prop of this.uViewProp){
          if(prop.location.toLowerCase().includes(this.searchProp.toLowerCase())){
          const displayProperty: any = {propertyId: prop.propertyId, 
                                        title: prop.title, 
                                        location: prop.location, 
                                        price : prop.price, 
                                        images: []}
          this.imageService.getAllPathsForTitle(prop.title).subscribe(dt=>{
            displayProperty.images = dt;
            this.displayProperties.push(displayProperty);
          })
        }
        }   
      })
    }
  }

  public details(id : number){
    if(localStorage.getItem('jwtToken'))
      this.router.navigate(["/user/viewPropDetails/" + id]);
    else
      this.router.navigate(["/signup"]);
  }

  // public searchBy(){
  //   if(this.searchProp!=''){
  //     this.service.getAllProperties().subscribe(data=>{
  //       this.uViewProp=data;
  //       for(let prop of this.uViewProp){
  //         if(prop.location.toLowerCase().includes(this.searchProp.toLowerCase())){
  //         const displayProperty: any = {propertyId: prop.propertyId, 
  //                                       title: prop.title, 
  //                                       location: prop.location, 
  //                                       price : prop.price, 
  //                                       images: []}
  //         this.imageService.getAllPathsForTitle(prop.title).subscribe(dt=>{
  //           displayProperty.images = dt;
  //           this.displayProperties.push(displayProperty);
  //         })
  //       }
  //       }
  //     })
  //   }
  // }

  // public filterByTyp(){
  //   this.service.getAllProperties().subscribe(data=>{
  //     this.uViewProp=data
  //     if(this.filtyp==='alltypes' || this.filtyp.trim().length==0){
  //       this.uViewProp=data
  //     }
  //     else{
  //       this.uViewProp=this.uViewProp.filter(flt=>flt.type.toLowerCase().includes(this.filtyp.toLowerCase()))
  //     }
       
  //   })
    
  // }

  public searchAndFilterProperties() {
  if (!this.searchProp && (!this.filtyp || this.filtyp === 'alltypes')) {
    // this.displayProperties = [];
    return;
  }

  this.service.getAllProperties().subscribe(data => {
    this.uViewProp = data;

    if (this.searchProp && this.searchProp.trim() !== '') {
      this.uViewProp = this.uViewProp.filter(prop =>
        prop.location.toLowerCase().includes(this.searchProp.toLowerCase())
      );
    }

    if (this.filtyp && this.filtyp !== 'alltypes') {
      this.uViewProp = this.uViewProp.filter(prop =>
        prop.type.toLowerCase().includes(this.filtyp.toLowerCase())
      );
    }

    this.displayProperties = [];

    for (let prop of this.uViewProp) {
      const displayProperty: any = {
        propertyId: prop.propertyId,
        title: prop.title,
        location: prop.location,
        price: prop.price,
        images: []
      };

      this.imageService.getAllPathsForTitle(prop.title).subscribe(dt => {
        displayProperty.images = dt;
        this.displayProperties.push(displayProperty);
      });
    }
  });
}
 
  filterProperties() {
    this.displayProperties = this.uViewProp.filter(
      property => property.price <= this.selectedPrice
    );
  }
  

  // ngOnInit(): void {
  //   this.viewProperty();
  // }
  
  // public viewProperty() {
  //   this.service.getAllProperties().subscribe(data => {
  //     this.uViewProp = data.map((prop, index) => ({
  //       ...prop,
  //       imageNames: this.getImageNames(), // assuming index maps to image number
  //       currentIndex: 0
  //     }));
  //   });
  // }
  
  // getImageNames(): string[] {
  //   return [
  //     `carousel_1.webp`,
  //     `carousel_2.webp`
  //   ];
  // }
  
  // nextImage(prop: any) {
  //   if (prop.currentIndex < prop.imageNames.length - 1) {
  //     prop.currentIndex++;
  //   }
  // }
  
  // prevImage(prop: any) {
  //   if (prop.currentIndex > 0) {
  //     prop.currentIndex--;
  //   }
  // }
  

}
