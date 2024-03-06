package com.rupa.CourseRegistrationSystem.controller;

import com.rupa.CourseRegistrationSystem.model.Department;
import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class DepartmentController {
    @Autowired
    DepartmentRepository departmentRepository;

    @PostMapping("/saveDepartment")
    Department newDepartment(@RequestBody Department newDepartment){
        return departmentRepository.save(newDepartment);
    }

    @GetMapping("/getAllDepartments")
    List<Department> getAllDepartments(){return departmentRepository.findAll();}
}
