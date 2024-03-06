package com.rupa.CourseRegistrationSystem.controller;

import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.CourseRepository;
import com.rupa.CourseRegistrationSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class PracticeController {

    @Autowired
    StudentRepository studentRepository;

    @Autowired
    CourseRepository courseRepository;

    @PostMapping("/saveStudent")
    Student newStudnet(@RequestBody Student student){
       return studentRepository.save(student);
    }

    @GetMapping("/getAllStudnets")
    List<Student> getAllStudnets(){
        return studentRepository.findAll();
    }

    @GetMapping("/getStudnetByID/{id}")
    Optional<Student> getStudentById(@PathVariable Long id){
        return studentRepository.findById(id);
    }

    @PutMapping("/updateStudent/{id}")
    Student updateStudent(@PathVariable Long id, @RequestBody Student student){
        return studentRepository.findById(id).map(x->{
            x.setName(student.getName());

            return studentRepository.save(x)
        });

    }
}
