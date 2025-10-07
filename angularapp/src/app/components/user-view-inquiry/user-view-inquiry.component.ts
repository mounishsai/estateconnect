import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyInquiry } from 'src/app/models/property-inquiry.model';
import { PropertyInquiryService } from 'src/app/services/property-inquiry.service';

@Component({
  selector: 'app-user-view-inquiry',
  templateUrl: './user-view-inquiry.component.html',
  styleUrls: ['./user-view-inquiry.component.css']
})
export class UserViewInquiryComponent implements OnInit {

  userInquiries: any[] = [];
  userId: number = 0;

  constructor(
    private service: PropertyInquiryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
    this.getUserInquiries();
  }

  public getUserInquiries(): void {
    this.service.getInquiriesByUserId(this.userId).subscribe((data) => {
      this.userInquiries = data;
    });
  }
}

