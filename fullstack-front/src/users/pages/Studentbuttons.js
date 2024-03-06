import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
export default function Studentbuttons() {
  return (
    <div>
        <div> .    </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link className="btn btn-primary" to ="/student/addstudent">Register as Student</Link> 
   <Link class="btn btn-primary " type="button" to="/student/viewAllStudents">Show all Student details</Link> 
  <Link class="btn btn-primary" type="button" to="/student/viewAllCoursesByDept">View all Courses by Department</Link>
  <Link class="btn btn-primary" type="button" to="/student/viewAllStudentsUnderCoursesByDept">View all Students under a Course</Link>
  <button class="btn btn-primary" type="button">Business Goal 2</button>
  <button class="btn btn-primary" type="button">Business Goal 3</button>
  <button class="btn btn-primary" type="button">Business Goal 4</button>
  <button class="btn btn-primary" type="button">Business Goal 5</button>
    </div>
    </div>
  ) 
}