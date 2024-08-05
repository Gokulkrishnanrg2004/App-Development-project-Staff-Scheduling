package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Staff {
    @Id
    int staff_id;
    String name;
    String dept_name;
    String role;
    public Staff() {
    }
    public Staff(int staff_id, String name, String dept_name, String role) {
        this.staff_id = staff_id;
        this.name = name;
        this.dept_name = dept_name;
        this.role = role;
    }
    public int getStaff_id() {
        return staff_id;
    }
    public void setStaff_id(int staff_id) {
        this.staff_id = staff_id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDept_name() {
        return dept_name;
    }
    public void setDept_name(String dept_name) {
        this.dept_name = dept_name;
    }
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
}
