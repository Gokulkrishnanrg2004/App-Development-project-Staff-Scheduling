package com.example.demo.controller;

import com.example.demo.model.Staff;
import com.example.demo.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

    @Autowired
    private StaffService staffService;

    // Create or Update Staff
    @PostMapping
    public Staff saveStaff(@RequestBody Staff staff) {
        return staffService.saveStaff(staff);
    }

    // Get all Staff
    @GetMapping
    public List<Staff> getAllStaff() {
        return staffService.getAllStaff();
    }

    // Get Staff by ID
    @GetMapping("/{id}")
    public Staff getStaffById(@PathVariable int id) {
        Optional<Staff> staff = staffService.getStaffById(id);
        return staff.orElse(null); 
    }

    // Delete Staff by ID
    @DeleteMapping("/{id}")
    public void deleteStaffById(@PathVariable int id) {
        staffService.deleteStaffById(id);
    }
}
