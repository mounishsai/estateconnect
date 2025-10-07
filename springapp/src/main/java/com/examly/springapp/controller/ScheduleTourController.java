package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.model.ScheduleTour;
import com.examly.springapp.service.ScheduleTourServiceImpl;

@RestController
public class ScheduleTourController {

    @Autowired
    private ScheduleTourServiceImpl tourService;

    @PostMapping("/api/tours")
    public ResponseEntity<?> addScheduleTour(@RequestBody ScheduleTour tour) {
        ScheduleTour savedTour = tourService.addTour(tour);
        if (savedTour != null) {
            return ResponseEntity.status(201).body(savedTour);
        } else {
            return ResponseEntity.status(400).body("Failed to schedule tour.");
        }
    }

    @GetMapping("/api/tours")
    public ResponseEntity<?> getAllScheduledTours() {
        List<ScheduleTour> tours = tourService.getAllTours();
        if (!tours.isEmpty()) {
            return ResponseEntity.status(200).body(tours);
        } else {
            return ResponseEntity.status(404).body("No scheduled tours found.");
        }
    }

    @GetMapping("/api/tours/status")
    public ResponseEntity<?> getToursByStatus(@RequestParam String status) {
        List<ScheduleTour> tours = tourService.getToursByStatus(status);
        if (!tours.isEmpty()) {
            return ResponseEntity.status(200).body(tours);
        } else {
            return ResponseEntity.status(404).body("No tours found with status: " + status);
        }
    }
}
