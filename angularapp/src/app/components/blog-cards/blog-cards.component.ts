// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';

// @Component({
//   selector: 'app-blog-cards',
//   templateUrl: './blog-cards.component.html',
//   styleUrls: ['./blog-cards.component.css']
// })
// export class BlogCardsComponent implements OnInit {

//   blogs: Blog[] = [];

//   constructor(private blogService: BlogService, private router: Router) {}

//   ngOnInit(): void {
//     this.blogService.getAllBlogs().subscribe(data => {
//       // let first = Math.random() * data.length;
//       this.blogs = data;
//     });
//   }

//   goToBlogDetail(blogId: number): void {
//     console.log(blogId);
//     this.router.navigate(["/blog/" +  blogId]);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';

// @Component({
//   selector: 'app-blog-cards',
//   templateUrl: './blog-cards.component.html',
//   styleUrls: ['./blog-cards.component.css']
// })
// export class BlogCardsComponent implements OnInit {

//   blogs: Blog[] = [];

//   constructor(private blogService: BlogService, private router: Router) {}

//   ngOnInit(): void {
//     this.blogService.getAllBlogs().subscribe(data => {
//       this.blogs = this.getRandomBlogs(data, 3);
//     });
//   }

//   getRandomBlogs(allBlogs: Blog[], count: number): Blog[] {
//     const shuffled = [...allBlogs].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   }

//   goToBlogDetail(blogId: number): void {
//     this.router.navigate(["/blog/" + blogId]);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html',
  styleUrls: ['./blog-cards.component.css']
})
export class BlogCardsComponent implements OnInit {

  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogs = this.getRandomBlogs(data, 3);
    });
  }

  getRandomBlogs(allBlogs: Blog[], count: number): Blog[] {
    const shuffled = [...allBlogs].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  goToBlogDetail(blogId: number): void {
    this.router.navigate(["/blog/" + blogId]);
  }

  goToBlogPage(): void {
    this.router.navigate(["/blog"]);
  }
}
