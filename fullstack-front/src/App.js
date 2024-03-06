import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Homebuttons from './pages/Homebuttons';
import Studentbuttons from './pages/Studentbuttons';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import Facultybuttons from './pages/Facultybuttons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFaculty from './users/AddFaculty';
import ViewAllFaculty from './pages/ViewAllFaculty';
import EditFaculty from './users/EditFaculty';
import MyCourses from './users/MyCourses';
import RegisterForCourse from './users/RegisterForCourse';
import ViewAllCoursesByDep from './users/ViewAllCoursesByDep';
import ViewAllStuCoursesByDep from './users/ViewAllStuCoursesByDep';
import DropCourse from './users/DropCourse';
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homebuttons/>}/>
        <Route exact path="/student" element={<Studentbuttons/>}/>
        <Route exact path="/faculty" element={<Facultybuttons/>}/>
        
        <Route exact path="/faculty/addfaculty" element={<AddFaculty/>}/> 
        <Route exact path="/student/addstudent" element={<AddUser/>}/> 
        <Route exact path="/student/viewAllStudents" element={<Home/>}/>
        <Route exact path="/student/viewAllStudents/:id/courses" element={<MyCourses/>}/>
        <Route exact path="/student/viewAllStudents/:id/courses/register" element={<RegisterForCourse/>}/>
        <Route exact path="/faculty/viewAllFaculty" element={<ViewAllFaculty/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/editfaculty/:id" element={<EditFaculty/>}/>
        <Route exact path="/student/viewAllCoursesByDept" element={<ViewAllCoursesByDep/>}/>
        <Route exact path="/student/viewAllStudentsUnderCoursesByDept" element={<ViewAllStuCoursesByDep/>}/>
        <Route exact path="/student/:id/course/:courseid" element={<DropCourse/>}/>

      </Routes>
    
      </Router>
      
    </div>
  );
}

export default App;
