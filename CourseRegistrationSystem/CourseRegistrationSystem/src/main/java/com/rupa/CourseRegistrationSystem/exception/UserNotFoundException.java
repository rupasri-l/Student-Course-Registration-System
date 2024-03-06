package com.rupa.CourseRegistrationSystem.exception;

public class UserNotFoundException extends RuntimeException{
    public UserNotFoundException(Long id){
        super("Could not find student with this id: "+id);
    }
}
