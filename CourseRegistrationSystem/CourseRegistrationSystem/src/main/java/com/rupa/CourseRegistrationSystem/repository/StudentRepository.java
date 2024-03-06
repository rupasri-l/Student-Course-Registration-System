package com.rupa.CourseRegistrationSystem.repository;

import com.rupa.CourseRegistrationSystem.model.Course;
import com.rupa.CourseRegistrationSystem.model.Student;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Long> {
    @Query(
            value = "DELETE FROM Student u WHERE u.studentid = ?1 and u.courseid=?2",
            nativeQuery = true)
    @Modifying
    @Transactional
    void deleteCourseById(Long id,Long courseid);


//@Query(value = "SELECT * from Student s, student_course_map sc where s.studentid=sc.studentid and sc.courseid=?1")
//    List<Student> getAllStudentsByCourseid(Long courseid);
//    //List<Student> findAllByDepartmentid(int );
}
