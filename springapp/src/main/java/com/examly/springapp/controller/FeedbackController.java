package com.examly.springapp.controller;
 
import java.util.List;
import java.util.Optional;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
 
import com.examly.springapp.model.Feedback;
import com.examly.springapp.service.FeedbackServiceImpl;
 
@RestController
public class FeedbackController {
    @Autowired private FeedbackServiceImpl feedbackServiceImpl;
 
    @PostMapping("/api/feedback")
    public ResponseEntity<?> createFeedback(@RequestBody Feedback f){
        Feedback fb=feedbackServiceImpl.createFeedback(f);
        if(fb!=null){
            return ResponseEntity.status(201).body(fb);
        }
        else{
            return ResponseEntity.status(409).body("");
        }
    }
 
    @GetMapping("/api/feedback/{feedbackId}")
    public ResponseEntity<?> getFeedbackById(@PathVariable long feedbackId){
        Optional<Feedback> fb=feedbackServiceImpl.getFeedbackById(feedbackId);
        if(fb.isPresent()){
            return ResponseEntity.status(200).body(fb);
        }
        else{
            return ResponseEntity.status(404).body("Feedback with given ID: "+feedbackId+" not found.");
        }
    }
 
    @GetMapping("/api/feedback")
    public ResponseEntity<?> getAllFeedbacks(){
        List<Feedback> list=feedbackServiceImpl.getAllFeedbacks();
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(400).body("Failed to load");
        }
    }
 
    @GetMapping("/api/feedback/user/{userId}")
    public ResponseEntity<?> getFeedbacksByUserId(@PathVariable long userId){
        List<Feedback> list=feedbackServiceImpl.getFeedbacksByUserId(userId);
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(404).body("Feedbacks with given User ID: "+userId+" not found.");
        }
    }
 
    @DeleteMapping("/api/feedback/{feedbackId}")
    public ResponseEntity<?> deleteFeedback(@PathVariable long feedbackId){
        feedbackServiceImpl.deleteFeedback(feedbackId);
        return ResponseEntity.status(200).body("Feedback deleted successfully");
    }
}
 
 