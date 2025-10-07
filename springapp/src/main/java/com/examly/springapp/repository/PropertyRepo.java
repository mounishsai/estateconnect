package com.examly.springapp.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Property;

@Repository
public interface PropertyRepo extends JpaRepository<Property, Long>{

    @Query("SELECT p from Property p WHERE p.title LIKE :newTitle")
    public Optional<Property> findPropertyByTitle(String newTitle); 

}
