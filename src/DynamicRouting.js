import React from 'react'
import './App.css'
import { BrowserRouter as Router, Link, Route,} from 'react-router-dom';
import Stud from './Stud';


let students = [
    { name: 'saurabh', rollno: 1021, city: 'nagpur' },
    { name: 'yogesh', rollno: 1022, city: 'sindhudurgh'},
    { name: 'shubham', rollno: 1023, city: 'pune' },
    { name: 'asiya', rollno: 1024, city: 'kolhapur' }
]
function DynamicRouting() {

    return (
        <div className="App">
            <Router>
                <h2>Dynamic Routing</h2>

                {
                    students.map((students) =>
                  <div>
                     <Link to={'/students/' +students.name+'/'+students.rollno+'/'+students.city}>
                     <h3>{students.name}</h3>
                     </Link>
                  </div>
                    )
                    
                }
                

                <Route path='/students/:name/:rollno/:city'><Stud /></Route>
                <Link to="akshay">Data from yogesh</Link>
                <Route path="akshay"><Akshay /></Route>
            </Router>
        </div>
    )
}

function Akshay() {
    return (
       <h2>
           
       </h2>
    )
}


export default DynamicRouting
