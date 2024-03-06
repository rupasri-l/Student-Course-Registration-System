package com.rupa.CourseRegistrationSystem.repository;

//import com.rupa.CourseRegistrationSystem.model.Course;
import com.rupa.CourseRegistrationSystem.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.*;
@Repository
public interface CourseRepository extends JpaRepository<Course,String> {
    @Query("select c from Course c where c.department.departmentid= ?1")
    List<Course> findAllByDepartmentByDepartmentid(Long departmentid);

    // List<Course> findAllByStudentid();
}
