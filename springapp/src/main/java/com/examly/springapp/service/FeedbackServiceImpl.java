package com.examly.springapp.service;
 
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
 
import com.examly.springapp.model.Feedback;
import com.examly.springapp.repository.FeedbackRepo;
 
@Service
public class FeedbackServiceImpl implements FeedbackService{
    @Autowired private FeedbackRepo feedbackRepo;
 
    @Override
    public Feedback createFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }
 
    @Override
    public Optional<Feedback> getFeedbackById(long feedbackId) {
        Optional<Feedback> fb=feedbackRepo.findById(feedbackId);
        if(fb.isPresent()){
            return fb;
        }
        else{
            return null;
        }
    }
 
    @Override
    public List<Feedback> getAllFeedbacks() {
        return feedbackRepo.findAll();
    }
 
    @Override
    public void deleteFeedback(long feedbackId) {
        Optional<Feedback> fb=feedbackRepo.findById(feedbackId);
        if(fb.isPresent()){
            feedbackRepo.deleteById(feedbackId);
        }
    }
 
    @Override
    public List<Feedback> getFeedbacksByUserId(long userId) {
        return feedbackRepo.getFeedbacksByUserId(userId);
    }
 
   
}
 
 