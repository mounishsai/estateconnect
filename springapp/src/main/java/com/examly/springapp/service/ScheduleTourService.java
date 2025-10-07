package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.ScheduleTour;

public interface ScheduleTourService {

    public ScheduleTour addTour(ScheduleTour tour);

    public List<ScheduleTour> getAllTours();

    public List<ScheduleTour> getToursByStatus(String status);
}
