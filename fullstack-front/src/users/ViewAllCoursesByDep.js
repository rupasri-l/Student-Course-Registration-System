import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from "react-router-dom";

export default function ViewAllCoursesByDep() {
  const [departments, setDepartments] = useState([])
  const [id,setId] = useState()
  const[coursesUnderdept,setCoursesUnderdept]=useState([]);

  useEffect(() => {
    loadDepartments();
    
  }, []);

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/getAllDepartments");
    setDepartments(res.data)
  }

  const loadCourses= async()=>{
    const res = await axios.get(`http://localhost:8080/getAllCourses/${id}`);
    console.log(`http://localhost:8080/getAllCourses/${id}`)
    console.log(res.data);
}

const onInputChange2=async (e)=>{
  const res = await axios.get(`http://localhost:8080/getAllCourses/${departments[e.target.value].departmentid}`);
  setCoursesUnderdept(res.data)
}

  return (

      <div className="mb-3">
            <label htmlFor="Name" className="form-label">Department</label>
            <div class="dropdown">
              { <select  class="form-select" aria-label="Default select example" name="department" onChange={(e)=> onInputChange2(e)}>
                <option selected>Choose Department</option>
                {departments.map((d, index) => (
                  <option key={index} value={index}>{d.departmentid} - {d.departmentname}</option>
                ))}
              </select> }
            </div>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">CourseId</th>
      <th scope="col">CourseName</th>
      <th scope="col">Department</th>
      

    </tr>
  </thead>
  <tbody>
    {
        coursesUnderdept.map((course,index)=>(
    <tr>
      <th scope="row" key={index}>{course.courseid}</th>
      <td>{course.coursename}</td>
      <td>{course.department.departmentname}</td>
    </tr>
        ))
    }
    
  </tbody>
  
</table>

<Link className="btn btn-outline-primary mx-2" to={`/student`}>Back</Link>

      </div>
         
    
  )
}
