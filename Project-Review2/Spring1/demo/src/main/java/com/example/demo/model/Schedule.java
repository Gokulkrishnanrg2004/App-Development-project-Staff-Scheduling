package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String day;
    private String shift;
    

    @ManyToOne
    private Staff staff;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }

    public Staff getStaff() {
        return staff;
    }

    public void setEmployee(Staff staff) {
        this.staff = staff;
    }

    public Schedule(Long id, String day, String shift, Staff staff) {
        this.id = id;
        this.day = day;
        this.shift = shift;
        this.staff = staff;
    }

    public Schedule() {
    }

    // Getters and Setters
}
