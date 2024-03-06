
import { Link,useNavigate, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios, { all } from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Multiselect from 'react-bootstrap-multiselect'
import { Form } from 'react-bootstrap';



export default function AddUser() {

 
  let navigate=useNavigate()

  const [inputValue,setValue] = useState('');
  const [selectedValue,setSelectedValue] = useState(null);
  //const [selectedCourses,setSelectedCourses]  =useState([]);

  const [user, setUser] = useState({
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
  const { name, dob, gender, email, address, phone, department,courses } = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onInputChange2=(e)=>{

     const x = e.target.value;
     const y = departments[x];
     
    setUser({...user,[e.target.name]:y})
    loadCourses();
    
  }
  let onInputChange3=(e)=>{
      //setSelectedCourses([...selectedCourses,allcourses[e.target.value]])
      setUser({...user,[e.target.name]:[...user.courses,allcourses[e.target.value]]})
    
  }
  const [departments, setDepartments] = useState([])
  const [allcourses,setAllCourses] = useState([]);
  useEffect(() => {
    loadDepartments();
    
  }, []);

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/getAllDepartments");
    setDepartments(res.data)
  }
  const loadCourses=async()=>{
    const res = await axios.get(`http://localhost:8080/getCourses/${(user.department.departmentid)}}`)
    setAllCourses(res.data)
  }

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/saveStudent",user);
    alert("student is succesfully registered, to view details plz visit show all studnets")
    navigate("/student")
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register Student</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type={"text"} className="form-control" placeholder="Enter your Name" name="name" value={name} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Date of birth</label>
            <input type={"text"} className="form-control" placeholder="Enter your DOB (mmddyyyy)" name="dob" value={dob} onChange={(e) => onInputChange(e)} />
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Gender</label>
            <input type={"text"} className="form-control" placeholder="Enter your Gender (M/F)" name="gender" value={gender} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Email</label>
            <input type={"text"} className="form-control" placeholder="Enter your Email" name="email" value={email} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Address</label>
            <input type={"text"} className="form-control" placeholder="Enter your Address" name="address" value={address} onChange={(e) => onInputChange(e)} />
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Phone Number</label>
            <input type={"text"} className="form-control" placeholder="Enter your PNo" name="phone" value={phone} onChange={(e) => onInputChange(e)} />
          </div>
        
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

          {/* <div className="mb-3">
            <label htmlFor="Name" className="form-label">Register for Courses</label>
            { <select  class="form-select" aria-label="Default select example" name="courses" onChange={(e)=> onInputChange3(e)} multiple data-live-search="true">
                <option selected>Choose Three Courses</option>
                {allcourses.map((d, index) => (
                  <option key={index} value={index}>{d.courseid} - {d.coursename}</option>
                ))}
              </select> }
          </div>
          <div>Selected courses</div>
          <div>{user.courses.map((d,index)=>(
            <div>{d.courseid} - {d.coursename}</div>
          ))}</div> */}
          {/* <Form>
            <Form.Control as="select" multiple value={courses} >
              {allcourses.map(option => (
                <option key={option.courseid} value={option.coursename}>
                  {option.coursename}   
                </option>
              ))}  
            </Form.Control>
          </Form> */}
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link type="submit" className="btn btn-outline-danger mx-2" to="/student">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
