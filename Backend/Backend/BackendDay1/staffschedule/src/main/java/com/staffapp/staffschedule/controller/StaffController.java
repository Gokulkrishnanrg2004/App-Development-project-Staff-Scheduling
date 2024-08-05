package com.staffapp.staffschedule.controller;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.staffapp.staffschedule.model.Staff;
import com.staffapp.staffschedule.service.StaffService;

@RestController
public class StaffController {
    @Autowired
    private StaffService service;

    @PostMapping("/staff")
    public ResponseEntity<String> create(@RequestBody Staff staff) {
        String result = service.addStaff(staff);
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Staff> getStaffById(@PathVariable int id) {
        Optional<Staff> staff = service.getStaffById(id);
        if (staff.isPresent()) {
            return new ResponseEntity<>(staff.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/staff/{id}")
    public ResponseEntity<String> deleteStaffById(@PathVariable int id) {
        String result = service.deleteStaffById(id);
        if ("Deleted".equals(result)) {
            return new ResponseEntity<>(result, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
    }
}