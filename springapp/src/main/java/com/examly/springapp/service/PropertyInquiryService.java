package com.examly.springapp.service;
 
import java.util.List;
import java.util.Optional;
 
import com.examly.springapp.model.PropertyInquiry;
 
public interface PropertyInquiryService {
   
    public PropertyInquiry addInquiry(PropertyInquiry propertyInquiry);
    public Optional<PropertyInquiry> getInquiryById(long inquiryId);
    public List<PropertyInquiry> getAllInquiries();
    public PropertyInquiry updateInquiry(long inquiryId, PropertyInquiry propertyInquiry);
    public void deleteInquiry(long inquiryId);
    public List<PropertyInquiry> getInquiriesByUserId(long userId);
  
}
 
 
