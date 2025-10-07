package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;


import com.examly.springapp.model.Payment;

public interface PaymentService {

     public Payment createPayment(Payment payment);
    public Optional<Payment> getPaymentById(long paymentId);
    public List<Payment> getAllPayments();
    

}
