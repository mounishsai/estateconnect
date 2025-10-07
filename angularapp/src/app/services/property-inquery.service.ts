// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Global } from '../global';
// import { PropertyInquiry } from '../models/property-inquiry.model';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PropertyInqueryService {


  
//   constructor(private http :HttpClient) { }

//   public addInquiry(inquiry :PropertyInquiry): Observable<PropertyInquiry>{
//      return this.http.post(Global.baseUrl+"/api/inquiries",inquiry) as Observable<PropertyInquiry>;
//   }

//   public getAllInquiries() :Observable<PropertyInquiry[]>{
//     return this.http.get(Global.baseUrl+"/api/inquiries") as Observable<PropertyInquiry[]>;
//   }

//   public getInquiriesByUserId(userId :number) :Observable<PropertyInquiry[]>{
//      return this.http.get(Global.baseUrl+"/api/inquiries/user/:userId"+userId) as Observable<PropertyInquiry[]>;
//   }

//   public updateInquiry(inquiryId: number,inquiry: PropertyInquiry) :Observable<PropertyInquiry>{
//     return this.http.put(Global.baseUrl+"/api/inquiries/:inquiryId"+inquiryId,inquiry) as Observable<PropertyInquiry>;
//   }

//   public deleteInquiry(inquiryId :number) :Observable<any>{
//     return this.http.delete(Global.baseUrl+"/api/inquiries/:inquiryId"+inquiryId) as Observable<any>;
//   }

// }
