import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from "react-router-dom"

export default function ViewAllStuCoursesByDep() {
    const [departments, setDepartments] = useState([])
    const [studentsUnderCourse,setStudentsUnderCourse]=useState([])
  const [id,setId] = useState()
  const[coursesUnderdept,setCoursesUnderdept]=useState([]);

  useEffect(() => {
    loadDepartments();
    
  }, []);

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/getAllDepartments");
    setDepartments(res.data)
  }


const onInputChange2=async (e)=>{
  const res = await axios.get(`http://localhost:8080/getAllCourses/${departments[e.target.value].departmentid}`);
  setCoursesUnderdept(res.data)
}
const onInputChange3=async (e)=>{
    setStudentsUnderCourse(coursesUnderdept[e.target.value].students)
  }
  return (
    <div>
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
        </div>
        <div className="mb-3">
            <label htmlFor="Name" className="form-label">Course</label>
            <div class="dropdown">
              { <select  class="form-select" aria-label="Default select example" name="course" onChange={(e)=> onInputChange3(e)}>
                <option selected>Choose Course</option>
                {coursesUnderdept.map((d, index) => (
                  <option key={index} value={index}>{d.courseid} - {d.coursename}</option>
                ))}
              </select> }
            </div>
        </div>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">StudentId</th>
      <th scope="col">StudentName</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>

    </tr>
  </thead>
  <tbody>
    {
        studentsUnderCourse.map((student,index)=>(
            <tr>
      <th scope="row" key={index}>{student.studentid}</th>
      <td>{student.name}</td>
      <td>{student.gender}</td>
      <td>{student.email}</td>
      <td>
      </td>
    </tr>)) }
    {console.log( studentsUnderCourse)}
    </tbody>
    </table>
    </div>
  )
}
