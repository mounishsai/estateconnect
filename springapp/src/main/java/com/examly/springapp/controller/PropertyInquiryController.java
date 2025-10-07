package com.examly.springapp.controller;
 
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.examly.springapp.model.PropertyInquiry;
import com.examly.springapp.service.PropertyInquiryServiceImpl;
 
@RestController
public class PropertyInquiryController {
    @Autowired private PropertyInquiryServiceImpl inquiryService;
 
    @PostMapping("/api/inquiries")
    public ResponseEntity<?> addPropertyInquiry(@RequestBody PropertyInquiry propInq){
        PropertyInquiry pr=inquiryService.addInquiry(propInq);
        if(pr!=null){
            return ResponseEntity.status(201).body(pr);
        }
        else{
            return ResponseEntity.status(400).body("Failed to add property inquiry");
        }
    }
 
    @GetMapping("/api/inquiries/{inquiryId}")
    public ResponseEntity<?> getPropertyInquiryById(@PathVariable long inquiryId){
        Optional<PropertyInquiry> pr=inquiryService.getInquiryById(inquiryId);
        if(pr.isPresent()){
            return ResponseEntity.status(200).body(pr);
        }
        else{
            return ResponseEntity.status(404).body("Inquiry with give ID: "+inquiryId+" not found");
        }
    }
 
    @GetMapping("/api/inquiries/user/{userId}")
    public ResponseEntity<?> getInquiryByUserId(@PathVariable long userId){
        List<PropertyInquiry> list=inquiryService.getInquiriesByUserId(userId);
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(404).body("Inquiry with given User ID: "+userId+" not found");
        }
    }
 
    @GetMapping("/api/inquiries")
    public ResponseEntity<?> getAllInquiries(){
        List<PropertyInquiry> list=inquiryService.getAllInquiries();
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(400).body("Failed to get all inquiries");
        }
    }
 
    @PutMapping("/api/inquiries/{inquiryId}")
    public ResponseEntity<?> updatePropertyInquiry(@PathVariable long inquiryId, @RequestBody PropertyInquiry pr){
        PropertyInquiry prop=inquiryService.updateInquiry(inquiryId, pr);
        if(prop!=null){
            return ResponseEntity.status(200).body(prop);
        }
        else{
            return ResponseEntity.status(404).body("Inquiry with give ID: "+inquiryId+" not found for updation");
        }
    }
 
    @DeleteMapping("/api/inquiries/{inquiryId}")
    public ResponseEntity<?> deleteInquiry(@PathVariable long inquiryId){
        inquiryService.deleteInquiry(inquiryId);
        return ResponseEntity.status(200).body("Deleted property inquiry successfully.");
    }
}
 
 
