package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.examly.springapp.model.Payment;

import com.examly.springapp.repository.PaymentRepo;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired PaymentRepo paymentRepo;

@Override
public Payment createPayment(Payment payment) {
    return paymentRepo.save(payment);
  
}

@Override
public Optional<Payment> getPaymentById(long paymentId) {
    Optional<Payment> p=paymentRepo.findById(paymentId);
        if(p.isPresent()){
            return p;
        }
        else{
            return null;
        }
}

@Override
public List<Payment> getAllPayments() {
    return paymentRepo.findAll();
}


}
