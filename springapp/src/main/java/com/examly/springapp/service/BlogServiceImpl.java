package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Blog;

import com.examly.springapp.repository.BlogRepo;


@Service
public class BlogServiceImpl implements BlogService{

    @Autowired BlogRepo blogRepo;

    @Override
    public Optional<Blog> getBlogById(long id) {
      
         Optional<Blog> b=blogRepo.findById(id);
        if(b.isPresent()){
            return b;
        }
        else{
            return null;
        }
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepo.findAll();
    }

}
