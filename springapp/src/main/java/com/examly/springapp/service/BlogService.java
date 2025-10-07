package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Blog;


public interface BlogService {

    public Optional<Blog> getBlogById(long id);
    public List<Blog> getAllBlogs();

}
