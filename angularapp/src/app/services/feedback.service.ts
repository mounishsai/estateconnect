import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback.model';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private http : HttpClient) { }

  public sendFeedback(feedback : any) : Observable<Feedback>{
    return this.http.post(Global.baseUrl + "/api/feedback",feedback) as Observable<Feedback>;
  }

  public getAllFeedbacksByUserId(userId : number) : Observable<Feedback[]>{
    return this.http.get(Global.baseUrl + "/api/feedback/user/" + userId) as Observable<Feedback[]>;
  }

  public deleteFeedback(feedbackId : number) : Observable<void>{
    return this.http.delete(Global.baseUrl + "/api/feedback/" + feedbackId) as Observable<any>;
  }

  public getFeedbacks() : Observable<Feedback[]>{
    return this.http.get(Global.baseUrl + "/api/feedback") as Observable<Feedback[]>;
  }

}
