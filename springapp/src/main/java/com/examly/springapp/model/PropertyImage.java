package com.examly.springapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


    @Entity
    @Table(name = "property_images")
    @NoArgsConstructor
    @AllArgsConstructor
    @Setter
    @Getter
    @ToString
    public class PropertyImage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String fileName;
    @Column(nullable = false)
    private String filePath;

    @Column(nullable = false)
    private String title;

    @Column
    private String uploadedBy;

    @Column
    private String uploadDate;

    
    
}


