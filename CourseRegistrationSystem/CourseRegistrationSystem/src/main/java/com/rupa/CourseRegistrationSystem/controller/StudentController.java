package com.rupa.CourseRegistrationSystem.controller;
import java.util.*;

import com.rupa.CourseRegistrationSystem.exception.UserNotFoundException;
import com.rupa.CourseRegistrationSystem.model.Course;
import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.CourseRepository;
import com.rupa.CourseRegistrationSystem.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private CourseRepository courseRepository;
    @PostMapping("/saveStudent")
    Student newStudent(@RequestBody Student newStudent){
        return studentRepository.save(newStudent);
    }

    @GetMapping("/getAllStudents")
    List<Student> getAllStudents(){
        return studentRepository.findAll();
    }

//    @GetMapping("/getStudentsByDeptId/{id}")
//    List<Student> getStudentByDeptId(@PathVariable("id") int did){
//    return  studentRepository.findAllByDepartmentid(did);
//}

    @GetMapping("/student/{id}")
    Student getStudentById(@PathVariable Long id){
        return studentRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/student/{id}")
    Student updateStudent(@RequestBody Student newstudent,@PathVariable Long id){
        return studentRepository.findById(id)
                .map(x->{
                    x.setName(newstudent.getName());
                    x.setDob(newstudent.getDob());
                    x.setGender(newstudent.getGender());
                    x.setEmail(newstudent.getEmail());
                    x.setAddress(newstudent.getAddress());
                    x.setPhone(newstudent.getPhone());
                    x.setDepartment(newstudent.getDepartment());
                    x.setCourses(newstudent.getCourses());
                    return studentRepository.save(x);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/student/{id}")
    String deleteStudent(@PathVariable Long id){
        if(!studentRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        studentRepository.deleteById(id);
        return "User with id : "+id+" has been deleted success.";
    }

    @DeleteMapping("/student/{id}/course/{courseid}")
    String deleteCourseForStudent(@PathVariable Long id,@PathVariable Long courseid){
        Student s = studentRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
        s.removeCourse(courseid);
        studentRepository.save(s);
        return "Deleted course for student";
    }

   // @DeleteMapping("/tags/")
//    @GetMapping("/rupa/{courseid}")
//    List<Student> getAllStudentsByCourseid(@PathVariable Long courseid){
//        return studentRepository.getAllStudentsByCourseid(courseid);
//
//    }
// studentRepository.deleteCourseById(id,courseid);
//        return "User with id : "+id+" has course with "+courseid+" has been deleted success.";




}
