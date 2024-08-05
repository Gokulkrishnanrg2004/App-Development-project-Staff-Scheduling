package com.example.demo.service;

import com.example.demo.model.Staff;
import com.example.demo.repository.StaffRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StaffService {

    @Autowired
    private StaffRepo staffRepo;

    // Create or Update Staff
    public Staff saveStaff(Staff staff) {
        return staffRepo.save(staff);
    }

    // Get all Staff
    public List<Staff> getAllStaff() {
        return staffRepo.findAll();
    }

    // Get Staff by ID
    public Optional<Staff> getStaffById(int staffId) {
        return staffRepo.findById(staffId);
    }

    // Delete Staff by ID
    public void deleteStaffById(int staffId) {
        staffRepo.deleteById(staffId);
    }
}
