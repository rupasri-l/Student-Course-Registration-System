
import { Link,useNavigate, useParams, useSearchParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function EditFaculty() {
  let navigate=useNavigate()
    const {id} =useParams()
  const [inputValue,setValue] = useState('');
  const [selectedValue,setSelectedValue] = useState(null);
  
  const [user, setUser] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    address: "",
    phone: "",
    emptype:"",
    department:{
      
        departmentid: 0,
        departmentname: ""
    
    }
  })
  const { name, dob, gender, email, address, phone ,emptype,department} = user

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onInputChange2=(e)=>{

     const x = e.target.value;
     const y = departments[x];
     
    setUser({...user,[e.target.name]:y})
  }

  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/faculty/${id}`);
    setUser(result.data);
  }
  const [departments, setDepartments] = useState([])
  useEffect(() => {
    loadDepartments();
    loadUser();
  }, []);

  const loadDepartments = async () => {
    const res = await axios.get("http://localhost:8080/getAllDepartments");
    setDepartments(res.data)
  }

  const onSubmit=async (e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/faculty/${id}`,user);
    alert("student is succesfully registered, to view details plz visit show all studnets")
    navigate("/faculty")
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Faculty</h2>
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
                <option selected>{user.department.departmentname}</option>
                {departments.map((d, index) => (
                  <option key={index} value={index}>{d.departmentid} - {d.departmentname}</option>
                ))}
              </select> }
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Employment Type</label>
            <div class="dropdown">
              { <select  class="form-select" aria-label="Default select example" name="emptype" value={emptype} onChange={(e)=> onInputChange(e)}>
                <option selected>Choose Employment Type</option>
                <option value="fulltime">Full Time</option>
                <option value="parttime">Part Time</option>
              </select> }
            </div>
          </div>
  
          <button type="submit" className="btn btn-outline-primary">Submit</button>
          <Link type="submit" className="btn btn-outline-danger mx-2" to="/faculty/viewAllFaculty">Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
