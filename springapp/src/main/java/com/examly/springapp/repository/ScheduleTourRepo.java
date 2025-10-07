package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.ScheduleTour;

@Repository
public interface ScheduleTourRepo extends JpaRepository<ScheduleTour, Long> {

    @Query("SELECT s FROM ScheduleTour s WHERE s.status LIKE :status")
    public List<ScheduleTour> findToursByStatus(String status);
}
