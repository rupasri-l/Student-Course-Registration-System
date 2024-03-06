package com.rupa.CourseRegistrationSystem.repository;

import com.rupa.CourseRegistrationSystem.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,String> {
}
