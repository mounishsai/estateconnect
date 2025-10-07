package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.PropertyImage;

@Repository
public interface PropertyImageRepo extends JpaRepository<PropertyImage,Long> {
    
    @Query("SELECT p.fileName FROM PropertyImage p WHERE p.title = :title")
    public List<String> filePaths(String title);
}
