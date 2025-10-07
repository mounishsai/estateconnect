import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-user-add-feedback',
  templateUrl: './user-add-feedback.component.html',
  styleUrls: ['./user-add-feedback.component.css']
})
export class UserAddFeedbackComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback : any = {feedbackText: "", date: "", user: {userId:0}, property: {propertyId:0}, category:"" };
  propertyId : number = 0;
  userId : number = 0;
  propertyTitle : string = "";

  constructor(private fb : FormBuilder, 
              private feedbackService: FeedbackService, 
              private activatedRoute : ActivatedRoute, 
              private propertyService : PropertyService) { 
    this.feedbackForm = fb.group({
      message : fb.control("",[Validators.required]),
    })
  }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
    // this.activatedRoute.params.subscribe(data=>{
    //   this.propertyId = data['propertyId'];
    //   this.propertyService.getPropertyById(this.propertyId).subscribe(dt=>{
    //     this.propertyTitle = dt.title;
    //   })
    // })
    
  }

  public submitFeedback(){
    if(this.feedbackForm.valid){
      console.log()
      this.feedbackService.sendFeedback(this.feedbackForm.value).subscribe(data=>{
      })
    }
  }

  public get message(){
    return this.feedbackForm.get('message') as FormControl;
  }

  public get date(){
    return this.feedbackForm.get('date') as FormControl;
  }

  public get category(){
    return this.feedbackForm.get('category') as FormControl;
  }

  public get property(){
    return this.feedbackForm.get('property') as FormControl;
  }

}
