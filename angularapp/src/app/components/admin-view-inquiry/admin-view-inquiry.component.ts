import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyInquiry } from 'src/app/models/property-inquiry.model';
import { PropertyInquiryService } from 'src/app/services/property-inquiry.service';

@Component({
  selector: 'app-admin-view-inquiry',
  templateUrl: './admin-view-inquiry.component.html',
  styleUrls: ['./admin-view-inquiry.component.css']
})
export class AdminViewInquiryComponent implements OnInit {

  inquiryId: number;
  isEditMode :boolean = false;
  userId: number;
  propertyId: number
  inquiry: PropertyInquiry = {
    user: {},
    property: {},
    message: "",
    status: "",
    inquiryDate: "",
    responseDate: "",
    adminResponse: "",
    priority: "",
    contactDetails: "",
  }
  inquiries: PropertyInquiry[] = [];
  searchText: string = "";
  selectedStatus: string = "";
  selectedPriority: string = "";
  showDeleteModal: boolean = false;
  showaddResponseModal: boolean = false;
  responseText: string = "";
  id: number;
  constructor(private service: PropertyInquiryService, private route: Router, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllInquiry();
  }

  public getAllInquiry() {
    this.service.getAllInquiries().subscribe((data) => {
      this.inquiries = data;
    })
  }

  // public searchAllFilter() {
  //   this.service.getAllInquiries().subscribe((data) => {
  //     this.inquiries = data
  //     if (this.searchText.trim().length != 0) {
  //       this.inquiries = this.inquiries.filter(flt => JSON.stringify(flt).toLowerCase().includes(this.searchText.toLowerCase()))
  //     }
  //   })
  // }

  // public filterByStatus() {
  //   this.service.getAllInquiries().subscribe(data => {
  //     switch (this.selectedStatus.trim()) {
  //       case 'Pending':
  //         this.inquiries = data.filter(flt => flt.status.toLowerCase() === 'pending');
  //         break;
  //       case 'Resolved':
  //         this.inquiries = data.filter(flt => flt.status.toLowerCase() === 'resolved');
  //         break;
  //       default:
  //         this.inquiries = data; // Show all if no status selected
  //         break;
  //     }
  //   });
  // }

  public applyFilters() {
    this.service.getAllInquiries().subscribe(data => {
      let filtered = data;
  
      // Filter by status
      if (this.selectedStatus.trim()) {
        filtered = filtered.filter(flt => flt.status.toLowerCase() === this.selectedStatus.toLowerCase());
      }
  
      // Filter by search text
      if (this.searchText.trim()) {
        filtered = filtered.filter(flt =>
          JSON.stringify(flt).toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
  
      this.inquiries = filtered;
    });
  }
  //  ---------------ADD RESPONSE-----------

  addResponse(inquiry: PropertyInquiry) {
    this.showaddResponseModal = true;
    this.isEditMode = false;
    this.inquiry = { ...inquiry }; // clone the inquiry
    this.responseText = ""; // empty for new response
  }
  
  editResponse(inquiry: PropertyInquiry) {
    this.showaddResponseModal = true;
    this.isEditMode = true;
    this.inquiry = { ...inquiry }; // clone the inquiry
    this.responseText = inquiry.adminResponse; // prefill existing response
  }

  submitResponse() {
    this.inquiry.adminResponse = this.responseText;
  
    if (this.responseText.trim() === "") {
      this.inquiry.status = "Pending";
      this.inquiry.responseDate = ""; // Clear response date if no response
    } else {
      this.inquiry.status = "Resolved";
      this.inquiry.responseDate = new Date().toISOString().split('T')[0]; // today's date
    }
  
    this.service.updateInquiry(this.inquiry.inquiryId, this.inquiry).subscribe(() => {
      this.getAllInquiry();
    });
  
    this.resetResponseModal();
  }

  cancelResponse() {
    this.resetResponseModal();
  }

  resetResponseModal() {
    this.showaddResponseModal = false;
    this.isEditMode = false;
    this.responseText = "";
  }


  // ----------------------DELETE---------------------


  public deleteInquiry(id: number) {
    this.showDeleteModal = true;
    this.inquiryId = id;
  }

  public confirmDelete() {
    this.service.deleteInquiry(this.inquiryId).subscribe((data) => {
      this.ngOnInit;
    })
    this.resetDeleteModal();
  }

  public cancelDelete() {
    this.resetDeleteModal();
  }

  resetDeleteModal() {
    this.showDeleteModal = false;
  }
}
