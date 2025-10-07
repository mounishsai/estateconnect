package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.exceptions.DuplicatePropertyException;
import com.examly.springapp.model.Property;
import com.examly.springapp.service.PropertyServiceImpl;

@RestController
public class PropertyController {
    @Autowired PropertyServiceImpl propertyServiceImpl;

    @PostMapping("/api/properties")
    public ResponseEntity<?> addProperty(@RequestBody Property prop){
        try{
            Property property=propertyServiceImpl.addProperty(prop);
            return ResponseEntity.status(201).body(property);
        }
        catch(DuplicatePropertyException e){
            return ResponseEntity.status(409).body(e.getMessage());
        }
    }

    @GetMapping("/api/properties/{propertyId}")
    public ResponseEntity<?> getPropertyById(@PathVariable long propertyId){
        Property prop=propertyServiceImpl.getPropertyById(propertyId).get();
        if(prop!=null){
            return ResponseEntity.status(200).body(prop);
        }
        else{
            return ResponseEntity.status(404).body("Property not found with property ID: "+propertyId);
        }
    }

    @GetMapping("/api/properties")
    public ResponseEntity<?> getAllProperties(){
        List<Property> properties=propertyServiceImpl.getAllProperties();
        if(properties.size()!=0){
            return ResponseEntity.status(200).body(properties);
        }
        else{
            return ResponseEntity.status(400).body("");
        }
    }

    @PutMapping("/api/properties/{propertyId}")
    public ResponseEntity<?> updateProperty(@PathVariable long propertyId, @RequestBody Property p){
        Property property=propertyServiceImpl.updateProperty(propertyId, p);
        if(property!=null){
            return ResponseEntity.status(200).body(property);
        }
        else{
            return ResponseEntity.status(404).body("Property not found for update with ID: "+propertyId);
        }
    }

    @DeleteMapping("/api/properties/{propertyId}")
    public ResponseEntity<?> deleteProperty(@PathVariable long propertyId){
        propertyServiceImpl.deleteProperty(propertyId);
        return ResponseEntity.status(200).body("");
    }

    // @GetMapping("/api/properties/{title}")
    // public ResponseEntity<?> checkPropertyExists(@PathVariable String title){
    //     System.out.println("Controller called");
    //     if(propertyServiceImpl.checkPropertyExists(title))
    //         return ResponseEntity.status(204).body(true);
    //     return ResponseEntity.status(200).body(false);
    // }
}
