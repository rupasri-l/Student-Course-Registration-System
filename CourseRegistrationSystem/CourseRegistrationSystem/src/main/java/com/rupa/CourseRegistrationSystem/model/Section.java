package com.rupa.CourseRegistrationSystem.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Section {
    @Id
    private int sectionid;
    private int classsize;

    @ManyToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name ="courseid"
    )
    private Course course;

    @ManyToOne(
            cascade = CascadeType.MERGE
    )
    @JoinColumn(
            name ="facultyid"
    )
    private Faculty faculty;

    @ManyToMany
    @JoinTable(
            name = "student_section_map",
            joinColumns = @JoinColumn(
                    name = "sectionid"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "studentid"
            )
    )
    private List<Student> students;



}
