package com.examly.springapp.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Property {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long propertyId;
    private String title;

    @Column(length = 3000)
    private String description;
    private String location;
    private double price;
    private String type;
    private String status;
    private long area;
    private int hallCount;
    private int bedroomCount;
    private int kitchenCount;
    private int washroomCount;
    private int balconyCount;
    private long parkingArea;
    private int hosptialDistance;
    private int airportDistance;
    private int railwayStationDistance;

    public Property() {
    }


    public Property(long propertyId, String title, String description, String location, double price, String type,
            String status, long area, int hallCount, int bedroomCount, int kitchenCount, int washroomCount, int balconyCount,
            long parkingArea, int hosptialDistance, int airportDistance, int railwayStationDistance) {
        this.propertyId = propertyId;
        this.title = title;
        this.description = description;
        this.location = location;
        this.price = price;
        this.type = type;
        this.status = status;
        this.area=area;
        this.hallCount=hallCount;
        this.bedroomCount=bedroomCount;
        this.kitchenCount=kitchenCount;
        this.washroomCount=washroomCount;
        this.balconyCount=balconyCount;
        this.parkingArea=parkingArea;
        this.hosptialDistance=hosptialDistance;
        this.airportDistance=airportDistance;
        this.railwayStationDistance=railwayStationDistance;
    }

    public long getArea() {
        return area;
    }

    public void setArea(long area) {
        this.area = area;
    }

    public int getHallCount() {
        return hallCount;
    }

    public void setHallCount(int hallCount) {
        this.hallCount = hallCount;
    }

    public int getBedroomCount() {
        return bedroomCount;
    }

    public void setBedroomCount(int bedroomCount) {
        this.bedroomCount = bedroomCount;
    }

    public int getKitchenCount() {
        return kitchenCount;
    }

    public void setKitchenCount(int kitchenCount) {
        this.kitchenCount = kitchenCount;
    }

    public int getWashroomCount() {
        return washroomCount;
    }

    public void setWashroomCount(int washroomCount) {
        this.washroomCount = washroomCount;
    }

    public int getBalconyCount() {
        return balconyCount;
    }

    public void setBalconyCount(int balconyCount) {
        this.balconyCount = balconyCount;
    }

    public long getParkingArea() {
        return parkingArea;
    }

    public void setParkingArea(long parkingArea) {
        this.parkingArea = parkingArea;
    }

    public int getHosptialDistance() {
        return hosptialDistance;
    }

    public void setHosptialDistance(int hosptialDistance) {
        this.hosptialDistance = hosptialDistance;
    }

    public int getAirportDistance() {
        return airportDistance;
    }

    public void setAirportDistance(int airportDistance) {
        this.airportDistance = airportDistance;
    }

    public int getRailwayStationDistance() {
        return railwayStationDistance;
    }

    public void setRailwayStationDistance(int railwayStationDistance) {
        this.railwayStationDistance = railwayStationDistance;
    }



    public long getPropertyId() {
        return propertyId;
    }
    public void setPropertyId(long propertyId) {
        this.propertyId = propertyId;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getLocation() {
        return location;
    }
    public void setLocation(String location) {
        this.location = location;
    }
    public double getPrice() {
        return price;
    }
    public void setPrice(double price) {
        this.price = price;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }



    // public String getFileName() {
    //     return fileName;
    // }



    // public void setFileName(String fileName) {
    //     this.fileName = fileName;
    // }



    @Override
    public String toString() {
        return "Property [propertyId=" + propertyId + ", title=" + title + ", description=" + description
                + ", location=" + location + ", price=" + price + ", type=" + type + ", status=" + status
                + ", area=" + area + ", hallCount=" + hallCount + ", bedroomCount="
                + bedroomCount + ", kitchenCount=" + kitchenCount + ", washroomCount=" + washroomCount
                + ", balconyCount=" + balconyCount + ", parkingArea=" + parkingArea + ", hosptialDistance="
                + hosptialDistance + ", airportDistance=" + airportDistance + ", railwayStationDistance="
                + railwayStationDistance + "]";
    }



    

    
    
}


