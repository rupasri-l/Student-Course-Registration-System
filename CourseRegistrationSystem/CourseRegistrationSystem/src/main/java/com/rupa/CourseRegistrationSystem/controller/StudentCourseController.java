package com.rupa.CourseRegistrationSystem.controller;

import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.CourseRepository;
import com.rupa.CourseRegistrationSystem.repository.StudentRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student/course")
public class StudentCourseController {
    private StudentRepository studentRepository;

    private CourseRepository courseRepository;

    public StudentCourseController(StudentRepository studentRepository,
                                   CourseRepository courseRepository) {
        this.studentRepository = studentRepository;
        this.courseRepository = courseRepository;
    }

//    @GetMapping("/{studentId}")
//    public Student findStudent(@PathVariable Long studentId){
//        return studentRepository.findById(studentId).orElse(null);
//    }
}
