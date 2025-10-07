// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;

//   constructor(
//     private route: ActivatedRoute,
//     private blogService: BlogService
//   ) {
//     console.log("Blog Details");
//   }

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     console.log(id);
//     this.blogService.getBlogById(id).subscribe(data => {
//       this.blog = data;
      
//     });
//   }

//   formatDate(dateStr: string): string {
//     const date = new Date(dateStr);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;
//   blogText: string = '';

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private blogService: BlogService,
//     private http: HttpClient
//   ) {
//     console.log("Blog Details");
//   }

//   ngOnInit(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     console.log(id);
//     this.blogService.getBlogById(id).subscribe(data => {
//       this.blog = data;
//     });

//     const textFilePath = `assets/blogs/entity/blogText${id}.txt`;
//     this.http.get(textFilePath, { responseType: 'text' }).subscribe({
//       next: (text) => this.blogText = text,
//       error: () => this.blogText = 'Blog description not available.'
//     });
//   }

//   formatDate(dateStr: string): string {
//     const date = new Date(dateStr);
//     return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
//   }

//   goBack(): void {
//     this.router.navigate(['/blog']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;
//   blogText: string = '';
//   id!: number;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private blogService: BlogService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     console.log('Blog ID:', this.id);

//     this.blogService.getBlogById(this.id).subscribe({
//       next: (data) => {
//         this.blog = data;
//       },
//       error: (err) => {
//         console.error('Error fetching blog data:', err);
//       }
//     });

//     const textFilePath = `assets/blogs/blogText${this.id}.txt`;
//     console.log('Fetching blog text from:', textFilePath);

//     this.http.get(textFilePath, { responseType: 'text' }).subscribe({
//       next: (text) => this.blogText = text,
//       error: (err) => {
//         console.error('Error loading blog text:', err);
//         this.blogText = 'Blog description not available.';
//       }
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/blog']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;
//   blogTextLines: string[] = [];
//   id!: number;
//   textFilePath: string = "../../../";

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private blogService: BlogService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     // console.log('Blog ID:', this.id);

//     this.blogService.getBlogById(this.id).subscribe({
//       next: (data) => {
//         this.blog = data;
//         this.textFilePath = this.textFilePath + this.blog.descriptionPath;
//         console.log(this.textFilePath);
//       },
//       error: (err) => {
//         console.error('Error fetching blog data:', err);
//       }
//     });

    
//     // console.log('Fetching blog text from:', textFilePath);

//     this.http.get(this.textFilePath, { responseType: 'text' }).subscribe({
//       next: (text) => {
//         this.blogTextLines = text.split('\n').filter(line => line.trim() !== '');
//       },
//       error: (err) => {
//         console.error('Error loading blog text:', err);
//         this.blogTextLines = ['Blog description not available.'];
//       }
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/blog']);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;
//   blogTextLines: string[] = [];
//   id!: number;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private blogService: BlogService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//     console.log('Blog ID:', this.id);

//     this.blogService.getBlogById(this.id).subscribe({
//       next: (data) => {
//         this.blog = data;

//         const textFilePath = this.blog.descriptionPath;
//         console.log('Fetching blog text from:', textFilePath);

//         this.http.get(textFilePath, { responseType: 'text' }).subscribe({
//           next: (text) => {
//             this.blogTextLines = text.split('\n').filter(line => line.trim() !== '');
//           },
//           error: (err) => {
//             console.error('Error loading blog text:', err);
//             this.blogTextLines = ['Blog description not available.'];
//           }
//         });
//       },
//       error: (err) => {
//         console.error('Error fetching blog data:', err);
//       }
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/blog']);
//   }
// }



// -------------------------------------------------------------------------------------






// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Blog } from 'src/app/models/blog.model';
// import { BlogService } from 'src/app/services/blog.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-blog-details',
//   templateUrl: './blog-details.component.html',
//   styleUrls: ['./blog-details.component.css']
// })
// export class BlogDetailsComponent implements OnInit {
//   blog!: Blog;
//   blogTextLines: string[] = [];
//   blogImagePath: string = '';
//   blogDate!: string;
//   id!: number;

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private blogService: BlogService,
//     private http: HttpClient
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));

//     this.blogService.getBlogById(this.id).subscribe({
//       next: (data) => {
//         this.blog = data;
//         this.blogDate = this.blog.date;
//         this.blogImagePath = this.blog.imagePath;

//         const textFilePath = this.blog.descriptionPath;
//         this.http.get(textFilePath, { responseType: 'text' }).subscribe({
//           next: (text) => {
//             this.blogTextLines = text.split('\n').filter(line => line.trim() !== '');
//           },
//           error: () => {
//             this.blogTextLines = ['Blog description not available.'];
//           }
//         });
//       },
//       error: (err) => {
//         console.error('Error fetching blog data:', err);
//       }
//     });
//   }

//   goBack(): void {
//     this.router.navigate(['/blog']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  blog!: Blog;
  blogTextLines: string[] = [];
  blogImagePath: string = '';
  blogDate!: string;
  id!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.blogService.getBlogById(this.id).subscribe({
      next: (data) => {
        this.blog = data;
        this.blogDate = this.blog.date;
        this.blogImagePath = this.blog.imagePath;

        const textFilePath = this.blog.descriptionPath;
        this.http.get(textFilePath, { responseType: 'text' }).subscribe({
          next: (text) => {
            this.blogTextLines = text.split('\n').filter(line => line.trim() !== '');

            // Scroll to top after content is loaded
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
          },
          error: () => {
            this.blogTextLines = ['Blog description not available.'];
            setTimeout(() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 0);
          }
        });
      },
      error: (err) => {
        console.error('Error fetching blog data:', err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/blog']);
  }
}