import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-admin-edit-property',
  templateUrl: './admin-edit-property.component.html',
  styleUrls: ['./admin-edit-property.component.css']
})
export class AdminEditPropertyComponent implements OnInit {

  propertyForm:FormGroup
  productId:number
  submitted: boolean = false;  
  showUpdateModal:boolean = false;

  constructor(private service:PropertyService, private fb:FormBuilder, private router:Router, private activatedRoute:ActivatedRoute) {
      this.propertyForm=fb.group(
        {
          //file_name:fb.control(""),
          title:fb.control("",Validators.required),
          description:fb.control("",Validators.required),
          location:fb.control("",Validators.required),
          price:fb.control("",[Validators.required,Validators.min(0)]),
          type:fb.control("",Validators.required),
          status:fb.control("",Validators.required),
          area:fb.control("",Validators.required),
          hallCount:fb.control("",Validators.required),
          bedroomCount:fb.control("",Validators.required),
          kitchenCount:fb.control("",Validators.required),
          washroomCount:fb.control("",Validators.required),
          balconyCount:fb.control("",Validators.required),
          parkingArea:fb.control("",Validators.required),
          hosptialDistance:fb.control("",Validators.required),
          airportDistance:fb.control("",Validators.required),
          railwayStationDistance:fb.control("",Validators.required)
        }
      )
   }

  ngOnInit(): void {
    this.productId=parseInt(this.activatedRoute.snapshot.paramMap.get('propertyId'));
    this.service.getPropertyById(this.productId).subscribe(data=>{
      this.propertyForm.patchValue(data);
    })
  }

  public updateProperty(){
    this.service.updateProperty(this.productId,this.propertyForm.value).subscribe(data=>{
      this.showUpdateModal = true;
    })
  }
}

