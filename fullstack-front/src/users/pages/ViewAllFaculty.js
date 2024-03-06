import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {Link,useNavigate, useParams} from "react-router-dom";
import { Button } from 'bootstrap';
import Studentbuttons from './Studentbuttons';

export default function ViewAllFaculty() {
  let navigate=useNavigate()
    const [students,setStudents] = useState([])
    useEffect(()=>{
        loadStudents();
    },[]);
    const {id} =useParams();

    const loadStudents = async()=>{
        const res = await axios.get("http://localhost:8080/getAllFaculty");
        setStudents(res.data);
    };
    const deleteUser = async (id)=>{
      await axios.delete(`http://localhost:8080/faculty/${id}`);
      alert("studnet deleted with id : "+id);
      loadStudents();
    }

  return (
    <div>
    <div className='container'>
      <div className='py-4'>
        
      <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">FacultyId</th>
      <th scope="col">Name</th>
      <th scope="col">DOB</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Phone</th>
      <th scope="col">Employment Type</th>
      <th scope="col">Department</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    {
        students.map((student,index)=>(
            <tr>
      <th scope="row" key={index}>{student.facultyid}</th>
      <td>{student.name}</td>
      <td>{student.dob}</td>
      <td>{student.gender}</td>
      <td>{student.email}</td>
      <td>{student.address}</td>
      <td>{student.phone}</td>
      <td>{student.emptype}</td>
      <td>{student.department.departmentname}</td>
      <td>
        <button className="btn btn-primary mx-2">My Courses</button>
        <Link className="btn btn-outline-primary mx-2"
        to={`/editfaculty/${student.facultyid}`}
        >Edit</Link>
        <button className="btn btn-danger mx-2" 
        onClick={()=>deleteUser(student.facultyid)}
        >Delete</button>
      </td>
    </tr>
        ))
    }
    
  </tbody>
  
</table>



      </div>
      
    </div>
    <Link className="btn btn-outline-primary mx-2" to="/faculty">Back</Link>
    </div>
    
  )
}
