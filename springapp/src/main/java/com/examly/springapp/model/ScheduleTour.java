package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class ScheduleTour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "propertyId", nullable = false)
    private Property property;

    private String tourDate;
    private String tourTime;
    private String name;
    private String phone;
    private String email;
    private String status;

    public ScheduleTour() {
    }

    public ScheduleTour(long id, Property property, String tourDate, String tourTime, String name, String phone, String email,  String status) {
        this.id = id;
        this.property = property;
        this.tourDate = tourDate;
        this.tourTime = tourTime;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.status=status;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public String getTourDate() {
        return tourDate;
    }

    public void setTourDate(String tourDate) {
        this.tourDate = tourDate;
    }

    public String getTourTime() {
        return tourTime;
    }

    public void setTourTime(String tourTime) {
        this.tourTime = tourTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "ScheduleTour [id=" + id + ", property=" + property + ", tourDate=" + tourDate +
               ", tourTime=" + tourTime + ", name=" + name + ", phone=" + phone + ", email=" + email + "]";
    }
    

    public String getStatus() { 
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}