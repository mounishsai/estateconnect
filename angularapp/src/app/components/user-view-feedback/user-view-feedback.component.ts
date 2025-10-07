import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/models/feedback.model';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-user-view-feedback',
  templateUrl: './user-view-feedback.component.html',
  styleUrls: ['./user-view-feedback.component.css']
})
export class UserViewFeedbackComponent implements OnInit {

  feedbacks : any[];
  userId : number = 0;

  constructor(private feedbackService : FeedbackService) {
    this.feedbacks = [{feedbackId: 0,feedbackText:"Very Nice",date:"25-08-2025",user:{userId:1},category:"Service",property:{propertyId: 1}}];
    this.userId = parseInt(localStorage.getItem('userId'));
  }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  public loadFeedbacks(){
    this.feedbackService.getAllFeedbacksByUserId(this.userId).subscribe(data=>{
      console.log(data);
      this.feedbacks = data;
    })
  }

}
