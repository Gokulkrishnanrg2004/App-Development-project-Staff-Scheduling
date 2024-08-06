package com.example.demo.controller;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Staff;
import com.example.demo.service.StaffService;

@RestController
@RequestMapping("/api/staff")
public class StaffController {

    private static final Logger logger = LoggerFactory.getLogger(StaffController.class);

    @Autowired
    private StaffService staffService;

    @PostMapping
    public Staff createStaff(@RequestBody Staff staff) {
        logger.info("Creating staff: {}", staff);
        return staffService.saveStaff(staff);
    }

    @GetMapping
    public List<Staff> getAllStaff() {
        return staffService.getAllStaffs();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable Long id) {
        Optional<Staff> staff = staffService.getStaffById(id);
        return staff.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteStaff(@PathVariable Long id) {
        staffService.deleteStaff(id);
    }
}
