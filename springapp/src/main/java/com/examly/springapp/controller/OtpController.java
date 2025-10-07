package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.OtpReceiveDTO;
import com.examly.springapp.model.OtpVerify;
import com.examly.springapp.service.OtpService;

@RestController
public class OtpController {

    @Autowired
    private OtpService otpService;

    @PostMapping("/api/sendOtp")
    public ResponseEntity<?> sendOtp(@RequestBody OtpReceiveDTO otpEmail){
        if(!otpService.sendOtp(otpEmail)){
            return ResponseEntity.status(400).body("Error");
        }
        return ResponseEntity.status(200).body("Otp Sent Successfully");
    }

    @PostMapping("/api/verifyOtp")
    public ResponseEntity<?> verifyOtp(@RequestBody OtpVerify verify){
        if(otpService.verifyOtp(verify)){
            return ResponseEntity.status(200).body(true);
        }
        return ResponseEntity.status(400).body(false);
    }

    @GetMapping("/api/sendBrochure/{userId}/{propertyId}")
    public ResponseEntity<?> sendBrochure(@PathVariable long userId, @PathVariable long propertyId){
        if(otpService.sendBrochure(userId, propertyId))
            return ResponseEntity.status(200).body(true);
        return ResponseEntity.status(401).body(false);
    }

}
