package com.rupa.CourseRegistrationSystem.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.annotation.Reference;

import java.util.*;
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.StringIdGenerator.class,
//        property="id")

@Entity
@Data
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int  courseid;

    private String coursename;

    @ManyToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name ="departmentid"
    )
    private Department department;
//    @Reference()
//    private Long departmentid;
    @ManyToMany(mappedBy = "courses",fetch=FetchType.LAZY)
@JsonIgnoreProperties(value = "courses")
    private List<Student> students;
//    @JsonManagedReference
//
//    public List<Student> getStudents(){
//        return students;
//    }
}
