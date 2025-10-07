import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyInquiry } from 'src/app/models/property-inquiry.model';
import { Property } from 'src/app/models/property.model';
import { AuthService } from 'src/app/services/auth.service';
import { PropertyInquiryService } from 'src/app/services/property-inquiry.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-user-add-inquiry',
  templateUrl: './user-add-inquiry.component.html',
  styleUrls: ['./user-add-inquiry.component.css']
})
export class UserAddInquiryComponent implements OnInit {
  // property:Property;
  inquiry:PropertyInquiry={
    message: "", 
    priority: "",
    user: {
      userId:1
    },
    property: {
      propertyId: 1
    },
    status: "Pending",
    inquiryDate: "2024-12-12",
    responseDate: "2025-12-12",
    adminResponse: "Not yet",
    contactDetails: "9321512312"
  };
  id:number;
  userId:number;

  showSuccessPopup :boolean = false;
  constructor(private service:PropertyInquiryService , private route :Router, private activatedRoute:ActivatedRoute, private propertyService:PropertyService, private authService : AuthService) { }

  ngOnInit(): void {
    this.userId=parseInt(localStorage.getItem('userId'));

    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('propertyId'));
    this.propertyService.getPropertyById(this.id).subscribe((data)=>{
      this.inquiry.property=data;
      // this.property=data;
    })
    this.authService.getUserById(this.userId).subscribe(d => {
      this.inquiry.user = d;

    })
  }

  public submitInquiry(){
    // this.inquiry.Property=this.property;
    console.log(this.inquiry);
    this.service.addInquiry(this.inquiry).subscribe((data)=>{
      // this.inquiry = data;
      this.showSuccessPopup=true;
    })
     
  }
  
  public redirectToProperties() {
    this.showSuccessPopup = false;
    this.route.navigate(['/user/inquiries']);
  }

}
