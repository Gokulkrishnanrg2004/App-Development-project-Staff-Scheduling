package com.staffapp.staffschedule.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.staffapp.staffschedule.model.Staff;
import com.staffapp.staffschedule.repository.StaffRepo;

@Service
public class StaffService {
    @Autowired
    private StaffRepo repo;

    public String addStaff(Staff staff) {
        repo.save(staff);
        return "Added";
    }

    public Optional<Staff> getStaffById(int id) {
        return repo.findById(id);
    }

    public String deleteStaffById(int id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
            return "Deleted";
        } else {
            return "Staff not found";
        }
    }
}
