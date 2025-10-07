import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Property } from 'src/app/models/property.model';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-admin-view-property',
  templateUrl: './admin-view-property.component.html',
  styleUrls: ['./admin-view-property.component.css']
})
export class AdminViewPropertyComponent implements OnInit {

  viewProp:Property[]
  searchby:string="";
  filtyp:string="";
  statusText:string="";

  constructor(private service:PropertyService) {
    
   }

  ngOnInit(): void {
    this.viewProperty()
  }

  public viewProperty(){
    this.service.getAllProperties().subscribe(data=>{
        this.viewProp=data
    })
  }

  // public deleteProperty(id:number){
  //   this.service.deleteProperty(id).subscribe(data=>{
  //     this.ngOnInit()
  //   })
  // }

  public searchBy(){
    if(!this.viewProp){
      console.log('no data')
    }
    else{
      this.service.getAllProperties().subscribe(data=>{
        this.viewProp=data
        if(this.searchby.trim().length!=0){
          this.viewProp=this.viewProp.filter(flt=>JSON.stringify(flt).toLowerCase().includes(this.searchby.toLowerCase()))
        }
      })
    }
  }

  public filterByTyp(){
    this.service.getAllProperties().subscribe(data=>{
      this.viewProp=data
      if(this.filtyp==='alltypes' || this.filtyp.trim().length==0){
        this.viewProp=data
      }
       else if(this.filtyp.trim().length!=0){
        
        this.viewProp=this.viewProp.filter(flt=>flt.type.toLowerCase().includes(this.filtyp.toLowerCase()))
      }
       
    })
    
  }
  showDeleteModal: boolean = false;
propertyToDelete: number | null = null;

confirmDelete(id: number): void {
  this.propertyToDelete = id;
  this.showDeleteModal = true;
}

deleteConfirmed(): void {
  if (this.propertyToDelete !== null) {
    this.service.deleteProperty(this.propertyToDelete).subscribe(() => {
      this.viewProperty(); // Refresh list
      this.cancelDelete();
    });
  }
}

cancelDelete(): void {
  this.showDeleteModal = false;
  this.propertyToDelete = null;
}

public changeByStatus(){
  this.service.getAllProperties().subscribe(data => {
    this.viewProp = data;
  
    const searchTerm = this.searchby.trim().toLowerCase();
    const typeFilter = this.filtyp.trim().toLowerCase();
    const statusFilter = this.statusText.trim().toLowerCase();
  
    // Apply filters only if needed
    this.viewProp = this.viewProp.filter(prop => {
      const matchesSearch = searchTerm.length === 0 || JSON.stringify(prop).toLowerCase().includes(searchTerm);
      const matchesType = typeFilter.length === 0 || typeFilter === 'alltypes' || prop.type.toLowerCase().includes(typeFilter);
      const matchesStatus = statusFilter.length === 0 || statusFilter === 'alltypes' || prop.status.toLowerCase().includes(statusFilter);
  
      return matchesSearch && matchesType && matchesStatus;
    });
  });
}

}
