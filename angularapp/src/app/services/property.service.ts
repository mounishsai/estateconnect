import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

import { Global } from '../global';
import { PropertyImage } from '../models/propertyImage.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }

  public getAllProperties():Observable<Property[]>{
    return this.http.get(Global.baseUrl+"/api/properties") as Observable<Property[]>
  }

  public getPropertyById(propertyId:number):Observable<Property>{
    return this.http.get(Global.baseUrl+"/api/properties"+"/"+propertyId) as Observable<Property>
  }

  public addProperty(property:Property):Observable<Property>{
    return this.http.post(Global.baseUrl+"/api/properties",property) as Observable<Property>
  }

  public updateProperty(propertyId:number,property:Property):Observable<Property>{
    return this.http.put(Global.baseUrl+"/api/properties/"+propertyId,property) as Observable<Property>
  }

  public deleteProperty(propertyId:number):Observable<any>{
    return this.http.delete(Global.baseUrl+"/api/properties/"+propertyId) 
  }

  // addPropertyWithImages(formData: FormData) {
  //   return this.http.post("/api/property-images", formData);
  // }

  
  uploadImage(formData: FormData): Observable<any> {
    return this.http.post(Global.baseUrl+'/upload-image', formData);
  }
  
  // public checkPropertyExists(title : string) : Observable<any>{
  //   console.log("Property Service called");
  //   return this.http.get("/api/properties/" + title) as Observable<any>;
  // }

  public sendBrochure(userId : number, propertyId : number) : Observable<any>{
    return this.http.get(Global.baseUrl + "/api/sendBrochure/" + userId + "/" + propertyId) as Observable<any>;
  }
  


  
}
