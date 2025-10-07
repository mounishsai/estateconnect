import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { PropertyImage } from '../models/propertyImage.model';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
//   private uploadUrl = 'http://localhost:8080/upload-image';

  constructor(private http: HttpClient) {}

  uploadImage(file: File, metadata: PropertyImage): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('data', JSON.stringify(metadata));
    return this.http.post(Global.baseUrl+"/upload-image", formData);
  }

  public getAllPathsForTitle(title:string):Observable<any>{
    return this.http.get(Global.baseUrl+"/get-image/"+title);
  }
}
