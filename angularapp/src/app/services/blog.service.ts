import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../models/blog.model';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {}

  getAllBlogs(): Observable<Blog[]> {
    return this.http.get(Global.baseUrl+"/api/blog") as Observable<Blog[]>;
  }

  getBlogById(id: number): Observable<Blog> {
    return this.http.get(Global.baseUrl + "/api/blog/" + id) as Observable<Blog>;
  }
}
