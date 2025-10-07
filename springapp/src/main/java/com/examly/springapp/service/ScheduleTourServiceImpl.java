package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.ScheduleTour;
import com.examly.springapp.repository.ScheduleTourRepo;


@Service
public class ScheduleTourServiceImpl implements ScheduleTourService {

    @Autowired
    private ScheduleTourRepo scheduleTourRepository;

    @Override
    public ScheduleTour addTour(ScheduleTour tour) {
        // if (tour.getProperty() == null || tour.getTourDate() == null || tour.getTourTime() == null) {
        //     throw new IllegalArgumentException("Missing required tour details.");
        // }
        return scheduleTourRepository.save(tour);
    }

    @Override
    public List<ScheduleTour> getAllTours() {
        List<ScheduleTour> tours = scheduleTourRepository.findAll();
        if (tours.isEmpty()) {
            throw new RuntimeException("No tours found.");
        }
        return tours;
    }

    @Override
    public List<ScheduleTour> getToursByStatus(String status) {
        List<ScheduleTour> tours = scheduleTourRepository.findToursByStatus(status);
        if (tours.isEmpty()) {
            throw new RuntimeException("No tours found with status: " + status);
        }
        return tours;
    }
}