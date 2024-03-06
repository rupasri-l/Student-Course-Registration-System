package com.rupa.CourseRegistrationSystem.repository;

import com.rupa.CourseRegistrationSystem.model.Faculty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FacultyRepository extends JpaRepository<Faculty,Long> {
}
