package com.examly.springapp.service;
 
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.examly.springapp.model.PropertyInquiry;
import com.examly.springapp.repository.PropertyInquiryRepo;
 
@Service
public class PropertyInquiryServiceImpl implements PropertyInquiryService{
 
    @Autowired private PropertyInquiryRepo inquiryRepo;
 
    @Override
    public PropertyInquiry addInquiry(PropertyInquiry propertyInquiry) {
        return inquiryRepo.save(propertyInquiry);
    }
 
    @Override
    public Optional<PropertyInquiry> getInquiryById(long inquiryId) {
        Optional<PropertyInquiry> prop=inquiryRepo.findById(inquiryId);
        if(prop.isPresent()){
            return prop;
        }
        else{
            return null;
        }
    }
 
    @Override
    public List<PropertyInquiry> getAllInquiries() {
        return inquiryRepo.findAll();
    }
 
    @Override
    public PropertyInquiry updateInquiry(long inquiryId, PropertyInquiry propertyInquiry) {
        Optional<PropertyInquiry> inquiry=inquiryRepo.findById(inquiryId);
        if(inquiry.isPresent()){
            propertyInquiry.setInquiryId(inquiryId);
            return inquiryRepo.save(propertyInquiry);
        }
        else{
            return null;
        }
    }
 
    @Override
    public void deleteInquiry(long inquiryId) {
        Optional<PropertyInquiry> inquiry=inquiryRepo.findById(inquiryId);
        if(inquiry.isPresent()){
            inquiryRepo.deleteById(inquiryId);
        }
    }
 
    @Override
    public List<PropertyInquiry> getInquiriesByUserId(long userId) {
        return inquiryRepo.findInquiryByUserId(userId);
    }
   
}
 
 