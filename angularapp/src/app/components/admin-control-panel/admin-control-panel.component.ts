import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback.model';
import { PropertyInquiry } from 'src/app/models/property-inquiry.model';
import { Property } from 'src/app/models/property.model';
import { ScheduleTour } from 'src/app/models/schedule-tour.model';
import { FeedbackService } from 'src/app/services/feedback.service';
import { PropertyInquiryService } from 'src/app/services/property-inquiry.service';
import { PropertyService } from 'src/app/services/property.service';
import { ScheduleTourService } from 'src/app/services/schedule-tour.service';

@Component({
  selector: 'app-admin-control-panel',
  templateUrl: './admin-control-panel.component.html',
  styleUrls: ['./admin-control-panel.component.css']
})
export class AdminControlPanelComponent implements OnInit {
  feedbacks:Feedback[]=[];
  inquiries:PropertyInquiry[]=[];
  properties:Property[]=[];
  unresolvedInquiries:PropertyInquiry[]=[];
  scheduledTours:ScheduleTour[]=[];
  searchText:string;
  toggleSort:string="";
  isFeedback:boolean=false;
  isInquiries:boolean=false;
  isTotalProperties:boolean=false;
  isUnresolvedInquiries:boolean=false;
  isTours:boolean=false;

  constructor(private feedbackService:FeedbackService, private inquiryService:PropertyInquiryService, private propertyService:PropertyService, private router:Router, private tourService:ScheduleTourService) { }

  ngOnInit(): void {
    this.feedbackService.getFeedbacks().subscribe((data)=>{
      this.feedbacks=data;
    })

    this.inquiryService.getAllInquiries().subscribe((data)=>{
      this.inquiries=data;
    })

    this.propertyService.getAllProperties().subscribe((data)=>{
      this.properties=data;
    })

    this.tourService.getAllTours().subscribe((data)=>{
      this.scheduledTours=data;
    })
  }

  public getUnresolvedInquiries(){
    let count=0;
    for(let i of this.inquiries){
      if(i.status==='Pending'){
        count++;
      }
    }

    return count;
  }

  public searchBy(){
    this.propertyService.getAllProperties().subscribe((data)=>{
      if(this.searchText.trim().length==0){
        this.properties=data;
      }
      else{
        this.properties=this.properties.filter(p=>JSON.stringify(p).toLowerCase().includes(this.searchText.toLowerCase()));
      }
    })
  }

  public toggle(){
    if(this.toggleSort==='lowToHigh'){
      this.properties.sort((p1, p2)=>p1.price-p2.price);
    }
    else{
      this.properties.sort((p2, p1)=>p1.price-p2.price);
    }
  }

  public onFeedback(){
    this.isFeedback=true;
  }

  public offFeedback(){
    this.isFeedback=false;
  }

  public onInquiry(){
    this.isInquiries=true;
  }

  public offInquiry(){
    this.isInquiries=false;
  }

  public onUnresolvedInquiry(){
    this.getUnresolved();
    this.isUnresolvedInquiries=true;
  }

  public offUnresolvedInquiry(){
    this.isUnresolvedInquiries=false;
  }

  public onTours(){
    this.isTours=true;
  }

  public offTours(){
    this.isTours=false;
  }

  public getUnresolved(){
    this.unresolvedInquiries = [];
    for(let i of this.inquiries){
      if(i.status==='Pending'){
        this.unresolvedInquiries.push(i);
      }
    }
  }

  public seeDetails(){
    this.router.navigate(['/admin/feedback'])
  }

  public resolveInquiries(){
    this.router.navigate(['/admin/resolveInquiries'], {queryParams:{unresolvedInquiries:this.unresolvedInquiries}});
  }

  public scrollToSection() {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
  }
}
