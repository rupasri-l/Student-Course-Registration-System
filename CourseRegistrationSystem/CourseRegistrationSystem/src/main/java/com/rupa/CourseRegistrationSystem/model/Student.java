package com.rupa.CourseRegistrationSystem.model;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;
import java.util.Set;

@Entity
@Data
//@JsonIdentityInfo(
//        generator = ObjectIdGenerators.StringIdGenerator.class,
//        property="id")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int studentid;
    private String  name;
    private String dob;
    private String gender;
    private String email;
    private String address;
    private String phone;

    @ManyToOne
    @JoinColumn(
            name ="departmentid"
    )
    private Department department;

    @Column(unique=true)
    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.MERGE)
    @JoinTable(
            name = "student_course_map",
            joinColumns ={ @JoinColumn(
                    name = "studentid"
            )},
            inverseJoinColumns = {@JoinColumn(
                    name = "courseid"
            )}
    )
//    @JsonIdentityReference(alwaysAsId = true)
    @JsonIgnoreProperties(value = "students")
    private List<Course> courses;

    public void removeCourse(Long courseid){
        Course course = this.courses.stream().filter(t->t.getCourseid()==courseid).findFirst().orElse(null);
        if(course!=null){
            this.courses.remove(course);
            course.getStudents().remove(this);
        }
    }
//@JsonBackReference
//    public List<Course> getCourses(){
//        return courses;
//    }
}
