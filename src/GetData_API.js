import React, { useEffect, useState } from 'react'
import './App.css'
import {BrowserRouter as Router , Route,Link} from 'react-router-dom';
import { Table } from 'react-bootstrap';



function App() {
    
    return (
        <div className="App">
              <Router>
                  <h2>Get method API call</h2>

                  <Link to="/users"><h2>API data</h2></Link>
                  <Route path="/users" exact={true}><Users/></Route>
              </Router>
        </div>
    )
}

function Users(){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/users').then((result) => {
            result.json().then((respo) => {
                setData(respo)
            })
        })
    }, [])
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>City</td>
                    </tr>
                    {
                    data.map((users) =>
                        <tr>
                             <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.contact}</td>
                            <td>{users.city}</td>
                        </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default App























// /* eslint-disable default-case */
// import React from "react"
// import { useState } from 'react'
// import { Table } from 'react-bootstrap';
// import './App.css';

// function Todo() {
//     const [data, setdata] = useState()
//     const [printData, setPrintData] = useState()

//     function getData(val) {
//         console.warn(val.target.value)
//         setdata(val.target.value)
//     }
//     return (
//         <div className="App">
//             <h2>TO DO List App</h2>
//             <input type='text'  onChange={getData}></input>
//             <button onClick={() => { setPrintData( ) }}>print data</button>
//             {
//                 data
//                 ?
//                 <div>
//                 {
//                     <Table striped bordered hover variant="dark">
//                     <tbody>
//                         <tr>
//                             <td>ID</td>
//                             <td>Data</td>
//                         </tr>
//                         {
//                            data.map((users) =>
//                                 <tr>
//                                     <td>{users.id}</td>
//                                     <td>{users.}</td>
//                                 </tr>

//                             )
//                         }
//                     </tbody>
//                 </Table> 
//                 }
//                 </div>
//                 :null
//             }
        
//         </div>
//     );

// }

// export default Todo;