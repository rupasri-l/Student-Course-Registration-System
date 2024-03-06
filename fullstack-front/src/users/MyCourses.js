import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from "react-router-dom";
//import { useHistory } from 'react-router'

export default function MyCourses() {
    const [finalcourses,setFinalCourses] = useState([])
    let navigate=useNavigate()
    const {id} =useParams();
    const [toggle,setToggle] = useState(false);
    const[coursesUnderdept,setCoursesUnderdept]=useState([]);
    //const history = useHistory()
    const [student, setStudent] = useState({
        studentid:0,
        name: "",
        dob: "",
        gender: "",
        email: "",
        address: "",
        phone: "",
        department:{
          
            departmentid: 0,
            departmentname: ""
    
        },
        courses:[]
      })
      const { studentid,name, dob, gender, email, address, phone, department,courses } = student
    

      
      let onInputChange3=(e)=>{
        const selectedCourse = coursesUnderdept[e.target.value]
        const unique = [...new Set(student.courses.map(item => item.courseid))]
         if(!unique.includes(selectedCourse.courseid)){
            setStudent({...student,[e.target.name]: [...student.courses,coursesUnderdept[e.target.value]]})
         }
    }


    useEffect(()=>{
        loadStudent();
        loadFinalCourses();
    },[])
    const loadFinalCourses=()=>{
        setFinalCourses(student.courses);
    }

    const loadStudent= async()=>{
        const res = await axios.get(`http://localhost:8080/student/${id}`);
        setStudent(res.data);
    };
    const loadCourses= async()=>{
        const res = await axios.get(`http://localhost:8080/getCourses/${student.department.departmentid}`);
        setCoursesUnderdept(res.data);
    };
    const func=async ()=>{
        //e.preventDefault();
        delete student.student
        await axios.put(`http://localhost:8080/student/${id}`,student);
        alert("student is succesfully registered, to view details plz visit show all studnets")
        navigate(0)
      }

      const dropFromCourse=async(x)=>{
        await axios.delete(`http://localhost:8080/student/${id}/course/${x}`)
        
        alert("Course dropped")
        navigate(0)
      }
  return (
    <div>
      <h3>Student ID: {student.studentid} -- Student Name: {student.name}</h3>
      <div className='container'>
      <div className='py-4'>
        
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">CourseId</th>
      <th scope="col">CourseName</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        student.courses.map((course,index)=>(
    <tr>
      <th scope="row" key={index}>{course.courseid}</th>
      <td>{course.coursename}</td>
      <td>{course.department.departmentname}</td>
      { <td>
        <button className="btn btn-primary mx-2" onClick={()=>dropFromCourse(course.courseid)} 
        
        >Drop</button>
        
      </td> }
    </tr>
        ))
    }
    
  </tbody>
  
</table>
  </div>
      </div>
      {toggle &&  <div>
      <div className="mb-3">
            <label htmlFor="Name" className="form-label">Register for Courses</label>
            { <select  class="form-select" aria-label="Default select example" name="courses" onChange={(e)=> onInputChange3(e)} multiple data-live-search="true">
                {coursesUnderdept.map((d, index) => (
                  <option key={index} value={index}>{d.courseid} - {d.coursename}</option>
                ))}  
              </select> }
          </div>
          <button type="submit" className="btn btn-outline-primary" onClick={()=>func()}>Submit</button>
          <Link type="submit" className="btn btn-outline-danger mx-2" to="/viewAllStudents">Cancel</Link>
      </div>}
      <button className="btn btn-outline-primary mx-2" onClick={()=>{setToggle(!toggle); loadCourses()}}>Register for Courses</button>
      <Link className="btn btn-outline-primary mx-2" to={`/student/viewAllStudents`}>Back</Link>
        
    </div>
    
  )
}
