import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.css']
})
export class WhyUsComponent implements OnInit {

  properties : number;
  users : any[] = [];

  stats1: any[] = [];
  stats2: any[] = [];
  

  constructor(private propertyService: PropertyService, private authService : AuthService) { 
    this.propertyService.getAllProperties().subscribe(data=>{
      this.properties = data.length;
      this.stats1 = [
        { label: 'Properties Listed', value: this.properties },
        { label: 'Agents Registered', value: 40 },
      ];
      this.stats2 = [
        { label: 'Projects Listed', value: this.properties + 4 },
        { label: 'Total Users', value: 16 }
      ]
    })
  }

  ngOnInit(): void {
  }

}
