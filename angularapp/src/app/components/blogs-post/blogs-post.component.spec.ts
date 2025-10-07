import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsPostComponent } from './blogs-post.component';

describe('BlogsPostComponent', () => {
  let component: BlogsPostComponent;
  let fixture: ComponentFixture<BlogsPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
