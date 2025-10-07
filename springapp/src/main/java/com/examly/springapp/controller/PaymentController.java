package com.examly.springapp.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.examly.springapp.model.Payment;

import com.examly.springapp.service.PaymentServiceImpl;

@RestController
public class PaymentController {

    @Autowired PaymentServiceImpl paymentServiceImpl;



    @PostMapping("/api/payments")
    public ResponseEntity<?> createPayment(@RequestBody Payment payment){
        Payment p=paymentServiceImpl.createPayment(payment);
        if(p!=null){
            return ResponseEntity.status(201).body(p);
        }
        else{
            return ResponseEntity.status(400).body("Failed to add payment");
        }
    }

       @GetMapping("/api/payments/{paymentId}")
    public ResponseEntity<?> getPaymentById(@PathVariable long paymentId){
        Optional<Payment> p=paymentServiceImpl.getPaymentById(paymentId);
        if(p.isPresent()){
            return ResponseEntity.status(200).body(p.get());
        }
        else{
            return ResponseEntity.status(404).body("Payment with given ID: "+paymentId+" not found.");
        }
    }
 
    @GetMapping("/api/payments")
    public ResponseEntity<?> getAllPayments(){
        List<Payment> list=paymentServiceImpl.getAllPayments();
        if(list.size()!=0){
            return ResponseEntity.status(200).body(list);
        }
        else{
            return ResponseEntity.status(400).body("Failed to load");
        }
    }



}
