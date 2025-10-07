import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../global';
import { ScheduleTour } from '../models/schedule-tour.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleTourService {

  constructor(private http: HttpClient) {}

  public addTour(tour: ScheduleTour): Observable<ScheduleTour> {
    return this.http.post(Global.baseUrl + "/api/tours", tour) as Observable<ScheduleTour>;
  }

  public getAllTours(): Observable<ScheduleTour[]> {
    return this.http.get(Global.baseUrl + "/api/tours") as Observable<ScheduleTour[]>;
  }

  public getToursByStatus(status: string): Observable<ScheduleTour[]> {
    return this.http.get(Global.baseUrl + "/api/tours/status?status=" + status) as Observable<ScheduleTour[]>;
  }
}