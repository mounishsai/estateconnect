package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import com.examly.springapp.model.Property;

public interface PropertyService {

    public Property addProperty(Property property);
    public Optional<Property> getPropertyById(long propertyId);
    public List<Property> getAllProperties();
    public Property updateProperty(long propertyId, Property property);
    public void deleteProperty(long propertyId);
     public boolean checkPropertyExists(String title);
}
