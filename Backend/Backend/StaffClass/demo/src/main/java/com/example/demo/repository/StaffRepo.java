package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Staff;

public interface StaffRepo extends JpaRepository<Staff, Integer>{
    
}
