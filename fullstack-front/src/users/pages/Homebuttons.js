import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
export default function Homebuttons() {
  return (
    <div>
        <div> .    </div>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Link className="btn btn-primary" to ="/student">Student Portal</Link> 
   <Link class="btn btn-primary "to="faculty" >Faculty Portal</Link> 
  <button class="btn btn-primary" type="button">Enroll as Faculty</button>
  <button class="btn btn-primary" type="button">Admin Business Goals</button>
  {/* <button class="btn btn-primary" type="button">Business Goal 1</button>
  <button class="btn btn-primary" type="button">Business Goal 2</button>
  <button class="btn btn-primary" type="button">Business Goal 3</button>
  <button class="btn btn-primary" type="button">Business Goal 4</button>
  <button class="btn btn-primary" type="button">Business Goal 5</button> */}
    </div>
    </div>
  ) 
}
