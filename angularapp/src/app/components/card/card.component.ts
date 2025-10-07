import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  isCard: boolean = false;

  // Holds the selected project for the popup
  project: any = { id: 0, title: "", location: "", imageUrl: "" };

  // List of projects
  projects = [
    {
      id: 1,
      title: 'The Greens',
      location: 'Airoli, Mumbai',
      expectedDate: '03-2026',
      noOfFlats: 54,
      noOfBookings: 29,
      imageUrl: '../../../assets/card/i1.jpg'
    },
    {
      id: 2,
      title: 'Palm Springs',
      location: 'Vashi, Mumbai',
      expectedDate: '07-2026',
      noOfFlats: 68,
      noOfBookings: 49,
      imageUrl: '../../../assets/card/i2.jpg'
    },

    {
      id: 3,
      title: 'The Serenity',
      location: 'Lonavala',
      expectedDate: '12-2026',
      noOfFlats: 32,
      noOfBookings: 12,
      imageUrl: '../../../assets/card/i6.jpg'
    },

    {
      id: 4,
      title: 'The Silver Falcon',
      location: 'Hinjewadi, Pune',
      expectedDate: '01-2027',
      noOfFlats: 88,
      noOfBookings: 71,
      imageUrl: '../../../assets/card/i11.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
  


  // Called when a card is clicked
  goToBlogDetail(id: number) {
    const selected = this.projects.find(p => p.id === id);
    if (selected) {
      this.project = selected;
      this.onCard();
    }
  }

  // Show popup
  public onCard() {
    this.isCard = true;
  }

  // Hide popup
  public offCard() {
    this.isCard = false;
  }

}

// import { Component, OnInit } from '@angular/core';

// import { Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';

// @Component({
//   selector: 'app-card',
//   templateUrl: './card.component.html',
//   styleUrls: ['./card.component.css']
// })
// export class CardComponent implements OnInit {
//   blogs: Blog[] = [];

//   constructor(private blogService: BlogService, private router: Router) {}

//   ngOnInit(): void {
//     this.blogService.getAllBlogs().subscribe(data => {
//       this.blogs = data;
//     });
//   }

//   goToBlogDetail(blogId: number): void {
//     console.log(blogId);
//     this.router.navigate(["/blog/" +  blogId]);
//   }
// }



