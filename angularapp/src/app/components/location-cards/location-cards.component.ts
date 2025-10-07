import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-cards',
  templateUrl: './location-cards.component.html',
  styleUrls: ['./location-cards.component.css']
})
export class LocationCardsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public search(location : string){
    this.router.navigate(["/user/viewProp"],{queryParams:{search: location}})
  }

}
