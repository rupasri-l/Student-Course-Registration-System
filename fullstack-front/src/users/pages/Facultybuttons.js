import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
export default function Facultybuttons() {
  return (
    <div>
        <div> .    </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link className="btn btn-primary" to ="/faculty/addfaculty">Register as Faculty</Link> 
   <Link class="btn btn-primary " type="button" to="/faculty/viewAllFaculty">Show all Faculty details</Link> 
  <button class="btn btn-primary" type="button" >View all Courses in my Department</button>
  <button class="btn btn-primary" type="button">Register for a Course</button>
  <button class="btn btn-primary" type="button">View all Registered Courses</button>
  <button class="btn btn-primary" type="button">Business Goal 2</button>
  <button class="btn btn-primary" type="button">Business Goal 3</button>
  <button class="btn btn-primary" type="button">Business Goal 4</button>
  <button class="btn btn-primary" type="button">Business Goal 5</button>
    </div>
    </div>
  ) 
}