import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blogs-post',
  templateUrl: './blogs-post.component.html',
  styleUrls: ['./blogs-post.component.css']
})
export class BlogsPostComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) {}

  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe(data => {
      this.blogs = data;
    });
  }

  // blogs = [];

  // constructor(private router: Router) {}

  // ngOnInit(): void {
  //   // Generate 10 blog entries with dynamic image paths
  //   for (let i = 1; i <= 10; i++) {
  //     this.blogs.push({
  //       id: i,
  //       title: `Blog Post ${i}`,
  //       date: `2025-08-${20 + i}`, // Example dates
  //       imagePath: `../../../assets/blogs/blog${i}.jpg`
  //     });
  //   }
  // }

  goToBlogDetail(blogId: number): void {
    console.log(blogId);
    this.router.navigate(["/blog/" +  blogId]);
  }
}



