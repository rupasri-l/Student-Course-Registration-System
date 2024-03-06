package com.rupa.CourseRegistrationSystem.controller;
import java.util.*;

import com.rupa.CourseRegistrationSystem.exception.UserNotFoundException;
import com.rupa.CourseRegistrationSystem.model.Faculty;
import com.rupa.CourseRegistrationSystem.model.Student;
import com.rupa.CourseRegistrationSystem.repository.FacultyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
public class FacultyController {
    @Autowired
    private FacultyRepository facultyRepository;

    @PostMapping("/saveFaculty")
    public Faculty saveFaculty(@RequestBody Faculty newfaculty){
        return facultyRepository.save(newfaculty);
    }

    @GetMapping("/getAllFaculty")
    public List<Faculty> getAllFaculty(){
        return facultyRepository.findAll();
    }

    @GetMapping("/faculty/{id}")
    Faculty getFacultyById(@PathVariable Long id){
        return facultyRepository.findById(id)
                .orElseThrow(()->new UserNotFoundException(id));
    }

    @PutMapping("/faculty/{id}")
    Faculty updateFaculty(@RequestBody Faculty newfaculty,@PathVariable Long id){
        return facultyRepository.findById(id)
                .map(x->{
                    x.setName(newfaculty.getName());
                    x.setDob(newfaculty.getDob());
                    x.setGender(newfaculty.getGender());
                    x.setEmail(newfaculty.getEmail());
                    x.setAddress(newfaculty.getAddress());
                    x.setPhone(newfaculty.getPhone());
                    x.setDepartment(newfaculty.getDepartment());
                    x.setEmptype(newfaculty.getEmptype());
                    return facultyRepository.save(x);
                }).orElseThrow(()->new UserNotFoundException(id));
    }

    @DeleteMapping("/faculty/{id}")
    String deleteFaculty(@PathVariable Long id){
        if(!facultyRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        facultyRepository.deleteById(id);
        return "User with id : "+id+" has been deleted success.";
    }



}
