package com.examly.springapp.model;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity 
public class Feedback {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long feedbackId;
    private String feedbackText;
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "userId", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "propertyId", nullable = true)
    private Property property;

    private String category;

    public Feedback() {
    }
    
    public Feedback(long feedbackId, String feedbackText, LocalDate date, User user, Property property,
            String category) {
        this.feedbackId = feedbackId;
        this.feedbackText = feedbackText;
        this.date = date;
        this.user = user;
        this.property = property;
        this.category = category;
    }
    public long getFeedbackId() {
        return feedbackId;
    }
    public void setFeedbackId(long feedbackId) {
        this.feedbackId = feedbackId;
    }
    public String getFeedbackText() {
        return feedbackText;
    }
    public void setFeedbackText(String feedbackText) {
        this.feedbackText = feedbackText;
    }
    public LocalDate getDate() {
        return date;
    }
    public void setDate(LocalDate date) {
        this.date = date;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Property getProperty() {
        return property;
    }
    public void setProperty(Property property) {
        this.property = property;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    @Override
    public String toString() {
        return "Feedback [feedbackId=" + feedbackId + ", feedbackText=" + feedbackText + ", date=" + date + ", user="
                + user + ", property=" + property + ", category=" + category + "]";
    }
}
