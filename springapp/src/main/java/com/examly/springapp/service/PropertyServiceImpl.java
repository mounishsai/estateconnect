package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.exceptions.DuplicatePropertyException;
import com.examly.springapp.model.Property;
import com.examly.springapp.repository.PropertyRepo;

@Service
public class PropertyServiceImpl implements PropertyService{

    @Autowired PropertyRepo propertyRepo;

    @Override
    public Property addProperty(Property property) {
        Optional<Property> prop=propertyRepo.findPropertyByTitle(property.getTitle());
        if(prop.isPresent()){
            throw new DuplicatePropertyException("Property with name " +property.getTitle()+" is already exist.");
        }

        return propertyRepo.save(property);
    }

    @Override
    public Optional<Property> getPropertyById(long propertyId) {
        Optional<Property> prop=propertyRepo.findById(propertyId);
        if(prop.isPresent()){
            return prop;
        }
        else{
            return null;
        }
    }

    @Override
    public List<Property> getAllProperties() {
        return propertyRepo.findAll();
    }

    @Override
    public Property updateProperty(long propertyId, Property property) {
        Optional<Property> prop=propertyRepo.findById(propertyId);
        if(prop.isPresent()){
            
            property.setPropertyId(propertyId);
            return propertyRepo.save(property);
        }
        else{
            return null;
        }
    }

    @Override
    public void deleteProperty(long propertyId) {
        Optional<Property> prop=propertyRepo.findById(propertyId);
        if(prop.isPresent()){
            propertyRepo.deleteById(propertyId);
        }
    }
    @Override
    public boolean checkPropertyExists(String title){
        System.out.println("Service called");
        Property prop = propertyRepo.findPropertyByTitle(title).get();
        System.out.println(prop);
        if(prop == null)
            return false;
        return true;
    }
    
}
