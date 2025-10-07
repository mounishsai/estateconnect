import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { Payment } from 'src/app/models/payment.model';
import { PropertyInquiry } from 'src/app/models/property-inquiry.model';
// import jsPDF from 'jspdf';
import { Property } from 'src/app/models/property.model';
import { PropertyImage } from 'src/app/models/propertyImage.model';
import { ScheduleTour } from 'src/app/models/schedule-tour.model';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { ImageService } from 'src/app/services/imageService.service';
import { PaymentService } from 'src/app/services/payment.service';
import { PropertyInquiryService } from 'src/app/services/property-inquiry.service';
import { PropertyService } from 'src/app/services/property.service';
import { ScheduleTourService } from 'src/app/services/schedule-tour.service';
declare var Razorpay: any;

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  propertyImage:PropertyImage;
  property:Property;
  imagePaths:any[]=[]; 
  propertyId:number;
  tourForm: FormGroup;
  showPopup: boolean = false;
  showImageGallery:boolean=false;
  zoomActive = false;
  currentIndex:number = 0;
  disableBuy:boolean=true;
  showInquiry:boolean=false;
  showFeedback:boolean=false;
  userId:number;
  showBuy:boolean=false;

  inquiry:PropertyInquiry={
    message: "", 
    priority: "Medium",
    user: {
      userId:1
    },
    property: {
      propertyId: 1
    },
    status: "Pending",
    inquiryDate: "2025-09-03",
    responseDate: "2025-09-03",
    adminResponse: "Not yet",
    contactDetails: "9321512312"
  };

  feedback : Feedback = {
    feedbackText:"",
    date: "2025-09-03",
    user:{userId :0},
    property:{propertyId :0},
    category:""
  }

  image:any;

  constructor(private propertyService:PropertyService, 
              private activatedRoute:ActivatedRoute, 
              private imageService:ImageService, 
              private fb: FormBuilder, 
              private tourService: ScheduleTourService, 
              private authService : AuthService,
              private propertyInquiryService : PropertyInquiryService,
              private feedbackService : FeedbackService,
              private paymentService : PaymentService) { 
    this.tourForm = this.fb.group({
      tourDate: ['', Validators.required],
      tourTime: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      status: ['Scheduled'],
      property: this.fb.group({
        propertyId: [1, Validators.required] // Replace with dynamic ID if needed
      })
    });
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
    this.propertyId=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.propertyService.getPropertyById(this.propertyId).subscribe((data)=>{
      this.property=data;
      this.imageService.getAllPathsForTitle(this.property.title).subscribe((data)=>{
        this.imagePaths=data;
      });
    });
    
  }


  openPopup() {
    this.showPopup = true;
  }
  
  closePopup() {
    this.showPopup = false;
  }
  
  submitTour() {
    if (this.tourForm.valid) {
      const tourData: any = this.tourForm.value;
      tourData.property.propertyId = this.property.propertyId;
      this.tourService.addTour(tourData).subscribe(() => {
        this.closePopup();
        this.tourForm.reset();
      });
    }
  }
  
  public buyatsale(){
    const RozarpayOptions = {
      description: 'Estate connect Razorpay account',
      currency: 'INR',
      amount: '100000',
      name: 'Estate Connect',
      key: 'rzp_test_RCCUHtK5UK9RrN',
      image: '',
      prefill: {
        name: 'Estate Connect',
        email: 'estateconnect@gmail.com',
        phone: '9898989898'
      },
      theme: {
        color: '#6466e3'
      },
      modal: {
        ondismiss:  () => {
          console.log('dismissed')
        }
      }
    }
  
    const successCallback = (paymentid: any) => {
      const payment : Payment = {
        paymentId : paymentid,
        paymentStatus : "Completed",
        user : {userId : this.userId},
        property : {propertyId : this.propertyId}
      }
      this.paymentService.createPayment(payment).subscribe(data=>{
        window.alert("Payment successful");
      })
    }
  
    const failureCallback = (e: any) => {
      console.log(e);
    }
  
    Razorpay.open(RozarpayOptions,successCallback, failureCallback)
  }
 
  showConfirmationPopup(): void {
    this.showBuy = true;
  }
 
  cancelPayment(): void {
    this.showBuy = false;
  }

  public openImageGallery(){
    this.showImageGallery=true;
  }

  public closeImageGallery(){
    this.showImageGallery=false;
  }
    
  openZoom(index: number) {
    console.log(index);
    this.currentIndex = index;
    this.zoomActive = true;
  }
  
  closeZoom() {
    this.zoomActive = false;
  }
  
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
  
  nextImage() {
    if(this.currentIndex < this.imagePaths.length - 1) {
      this.currentIndex++;
    }
  }

  public onInquiry(){
    this.showInquiry=true;
  }

  public offInquiry(){
    this.showInquiry=false;
  }

  public onFeedback(){
    this.showFeedback = true;
  }

  public offFeedback(){
    this.showFeedback = false;
  }

  public submitInquiry(){
    if(this.inquiry.message != ""){
      this.inquiry.property.propertyId = this.property.propertyId;
      this.inquiry.user.userId = this.userId;
      this.propertyInquiryService.addInquiry(this.inquiry).subscribe(data=>{
        this.offInquiry();
      })
    }
  }

  public submitFeedback(){
    if(this.feedback.feedbackText != ""){
      this.feedback.user.userId = this.userId;
      this.feedback.property.propertyId = this.property.propertyId;
      this.feedback.category = this.property.type;
      console.log(this.feedback);
      this.feedbackService.sendFeedback(this.feedback).subscribe(data=>{
        this.offFeedback();
      })
    }
  }

  public sendBrochure(): void {
    this.propertyService.sendBrochure(this.userId, this.propertyId).subscribe(data=>{
      if(data)
        window.alert("Brochure sent successfully");
      else
        window.alert("Error sending data right now. Try again after some time.");
    })
  }
}