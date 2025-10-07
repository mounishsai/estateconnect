import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { AuthService } from 'src/app/services/auth.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-admin-view-feedback',
  templateUrl: './admin-view-feedback.component.html',
  styleUrls: ['./admin-view-feedback.component.css']
})
export class AdminViewFeedbackComponent implements OnInit {

  feedbacks: Feedback[];
  loadingData: boolean;
  noDataAvailable: boolean;
  displayFeedback : any;
  displayFeedbacks : any[];
  category: string;

  constructor(private feedbackService : FeedbackService, private authService : AuthService, private propertyService : PropertyService) {
    this.feedbacks = [];
    this.loadingData = true;
    this.noDataAvailable = false;
    this.displayFeedbacks = [];
  }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  // public loadFeedbacks() : void{
  //   this.feedbackService.getFeedbacks().subscribe(data => {
  //     if(data.length == 0){
  //       this.noDataAvailable = true;
  //       return;
  //     }
  //     this.feedbacks = data;
  //     for(let fb of this.feedbacks){
  //       let userId = fb.user.userId;
  //       this.propertyService.getPropertyById(fb.property.propertyId).subscribe(dt=>{
  //         const displayFeedback : any = { userId : userId, 
  //                                         feedback : fb.feedbackText, 
  //                                         postedDate : fb.date, 
  //                                         feedbackId: fb.feedbackId, 
  //                                         propertyName: dt.title,
  //                                       };
  //         console.log(this.displayFeedback);
  //         this.displayFeedbacks.push(this.displayFeedback);
  //       })
        
  //     }
  //   })
  // }

  public loadFeedbacks(): void {
    this.feedbackService.getFeedbacks().subscribe(data => {
      if (data.length === 0) {
        this.noDataAvailable = true;
        return;
      }
  
      this.feedbacks = data;
      this.displayFeedbacks = []; // Clear previous data
  
      for (let fb of this.feedbacks) {
        const userId = fb.user.userId;
  
        this.propertyService.getPropertyById(fb.property.propertyId).subscribe(dt => {
          const displayFeedback: any = {
            userId: userId,
            feedback: fb.feedbackText,
            postedDate: fb.date,
            feedbackId: fb.feedbackId,
            propertyName: dt.title,
          };
  
          this.displayFeedbacks.push(displayFeedback);
        });
      }
    });
  }

  public showProfile(){

  }

  public viewPropertyInfo(){

  }

}
