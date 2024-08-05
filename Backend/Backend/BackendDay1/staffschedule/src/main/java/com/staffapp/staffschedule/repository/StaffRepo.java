package com.staffapp.staffschedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.staffapp.staffschedule.model.Staff;

public interface StaffRepo extends JpaRepository<Staff, Integer>{
    
}
