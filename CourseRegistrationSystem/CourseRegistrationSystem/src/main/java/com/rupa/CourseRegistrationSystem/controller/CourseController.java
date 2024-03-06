package com.rupa.CourseRegistrationSystem.controller;

import com.rupa.CourseRegistrationSystem.model.Course;
import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class CourseController {
@Autowired
    CourseRepository courseRepository;
    @PostMapping("/saveCourse")
    Course newCourse(@RequestBody Course newCourse){
        return courseRepository.save(newCourse);
    }

    @GetMapping("/getAllCourses")
    List<Course> getAllCourses(){
        return courseRepository.findAll();
    }
    @GetMapping("/getCourses/{departmentid}")
    List<Course> getAllCoursesByDepartmentId(@PathVariable String departmentid){
        Long id = Long.parseLong(String.valueOf(departmentid.charAt(0)));
        return courseRepository.findAllByDepartmentByDepartmentid(id);
    }
    @GetMapping("/getAllCourses/{deptid}")
    List<Course> getAllCoursesByDepartmentIdLong(@PathVariable Long deptid){
        return courseRepository.findAllByDepartmentByDepartmentid(deptid);
    }


}
