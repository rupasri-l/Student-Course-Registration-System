package com.rupa.CourseRegistrationSystem.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;
@Entity
@Data
public class Faculty {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long facultyid;
    private String  name;
    private String dob;
    private String gender;
    private String email;
    private String address;
    private String phone;
   private String emptype;


    @ManyToMany
    @JoinTable(
            name = "faculty_course_map",
            joinColumns = @JoinColumn(
                    name = "facultyid"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "courseid"
            )
    )

    private List<Course> courses;

    @ManyToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name ="departmentid"
    )
    private Department department;



}
