package com.examly.springapp.service;

import java.util.Properties;
import java.util.Random;
// import java.util.*;
import java.util.TimerTask;
import java.util.Timer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.OtpReceiveDTO;
import com.examly.springapp.model.OtpVerify;
import com.examly.springapp.model.User;
import com.examly.springapp.model.Property;
import com.examly.springapp.repository.UserRepo;
import com.examly.springapp.repository.PropertyRepo;

import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeBodyPart;
import jakarta.mail.internet.MimeMessage;
import jakarta.mail.internet.MimeMultipart;
import jakarta.mail.*;

@Service
public class OtpService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PropertyRepo propertyRepo;

    private String sentOtp = "";

    public String getOtp(){
        return sentOtp;
    }

    public void setOtp(String sentOtp){
        this.sentOtp = sentOtp;
    }

    public boolean sendOtp(OtpReceiveDTO otp){
        String email = otp.getEmail();
        String generatedOTP = generateOTP();
        sentOtp = generatedOTP;
        try{
            sendOTPEmail(email, generatedOTP);
            return true;
        }catch(Exception ex){
            return false;
        }

    }

    public boolean verifyOtp(OtpVerify verify){
        String recievedOtp = verify.getOtp();
        if(recievedOtp.equals(sentOtp)){
            return true;
        }
        return false;
    }

    private String generateOTP() {
        Random random = new Random();
        int otp = 100000 + random.nextInt(900000);
        return String.valueOf(otp);
    }

    private void sendOTPEmail(String toEmail, String otp) {
        final String fromEmail = "gandhi.aditya11@gmail.com";
        final String password = "pgppdqziebbxsjju";

        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com"); 
        props.put("mail.smtp.port", "587"); 
        props.put("mail.smtp.auth", "true"); 
        props.put("mail.smtp.starttls.enable", "true"); 

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(fromEmail, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(fromEmail));
            message.setRecipients(
                    Message.RecipientType.TO, InternetAddress.parse(toEmail));
            message.setSubject("Welcome to EstateConnect");
            message.setText("Your OTP is: " + otp + ". Your otp is valid for 5 minutes. Please don't share your otp with anyone.");

            Transport.send(message);

            Timer timer = new Timer();
            TimerTask task = new TimerTask() {
                public void run() {
                    setOtp("");
                    timer.cancel();
                }
            };
            timer.schedule(task, 5 * 60 * 1000);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }

    public boolean sendBrochure(long userId, long propertyId) {
    User user = userRepo.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
    Property property = propertyRepo.findById(propertyId).orElseThrow(() -> new RuntimeException("Property not found"));

    String toEmail = user.getEmail();
    String subject = "Property Brochure: " + property.getTitle();
    String content = generateBrochureContent(property); // HTML content

    try {
        Properties props = new Properties();
        props.put("mail.smtp.host", "smtp.gmail.com"); 
        props.put("mail.smtp.port", "587"); 
        props.put("mail.smtp.auth", "true"); 
        props.put("mail.smtp.starttls.enable", "true"); 

        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication("gandhi.aditya11@gmail.com", "pgppdqziebbxsjju");
            }
        });

        Message message = new MimeMessage(session);
        message.setFrom(new InternetAddress("gandhi.aditya11@gmail.com"));
        message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(toEmail));
        message.setSubject(subject);

        MimeBodyPart mimeBodyPart = new MimeBodyPart();
        mimeBodyPart.setContent(content, "text/html");

        Multipart multipart = new MimeMultipart();
        multipart.addBodyPart(mimeBodyPart);

        message.setContent(multipart);

        Transport.send(message);
        System.out.println("Brochure sent successfully to " + toEmail);
        return true;
    } catch (Exception e) {
        e.printStackTrace();
        return false;
    }
    }

    private String generateBrochureContent(Property property) {
        return "<html><body>" +
               "<h1>" + property.getTitle() + "</h1>" +
               "<p><strong>Description:</strong> " + property.getDescription() + "</p>" +
               "<p><strong>Location:</strong> " + property.getLocation() + "</p>" +
               "<p><strong>Price:</strong> Rupees. " + property.getPrice() + "</p>" +
               "<p><strong>Status:</strong> " + property.getStatus() + "</p>" +
               "<p><strong>Area:</strong> " + property.getArea() + " sq.ft</p>" +
               "<p><strong>Rooms:</strong> " + property.getBedroomCount() + " Bedrooms, " +
               property.getHallCount() + " Halls, " + property.getKitchenCount() + " Kitchens, " +
               property.getWashroomCount() + " Washrooms, " + property.getBalconyCount() + " Balconies</p>" +
               "<p><strong>Parking Area:</strong> " + property.getParkingArea() + " sq.ft</p>" +
               "<p><strong>Nearby Ammenities:</strong> Hospital - " + property.getHosptialDistance() + "m, " +
               "Airport - " + property.getAirportDistance() + "m, " +
               "Railway Station - " + property.getRailwayStationDistance() + "m</p>" +
               "<h1 style='justify-content: center;'>Estate Connect</h1>" +
               "<p><strong>Find your dream home here.</strong></p>" +
               "</body></html>";
    }


}


// pgpp dqzi ebbx sjju