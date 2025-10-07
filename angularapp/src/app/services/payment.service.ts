import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Global } from '../global';
import { Payment } from '../models/payment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) {}

  public createPayment(payment: Payment): Observable<Payment> {
    return this.http.post(Global.baseUrl + "/api/payments", payment) as Observable<Payment>;
  }

  public getAllPayments(): Observable<Payment[]> {
    return this.http.get(Global.baseUrl + "/api/payments") as Observable<Payment[]>;
  }

  public getPaymentById(paymentId: number): Observable<Payment> {
    return this.http.get(Global.baseUrl + "/api/payments/" + paymentId) as Observable<Payment>;
  }
}

