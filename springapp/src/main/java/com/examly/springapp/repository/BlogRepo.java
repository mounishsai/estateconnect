package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Blog;

public interface BlogRepo extends JpaRepository<Blog,Long> {

}
