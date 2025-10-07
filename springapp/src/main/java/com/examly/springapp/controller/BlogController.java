package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Blog;


import com.examly.springapp.service.BlogServiceImpl;

@RestController
public class BlogController {

    @Autowired BlogServiceImpl blogServiceImpl;


    @GetMapping("/api/blog/{blogId}")
    public ResponseEntity<?> getBlogById(@PathVariable long blogId){
        Optional<Blog> b=blogServiceImpl.getBlogById(blogId);
        if(b.isPresent()){
            return ResponseEntity.status(200).body(b.get());
        }
        else{
            return ResponseEntity.status(404).body("Blog with given ID: "+blogId+" not found.");
        }
    }
 
    @GetMapping("/api/blog")
    public ResponseEntity<?> getAllBlogs(){
        List<Blog> list=blogServiceImpl.getAllBlogs();
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(400).body("Failed to load");
        }
    }

}
