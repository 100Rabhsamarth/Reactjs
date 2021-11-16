import React from 'react'
import './App.css';
import {Table } from 'react-bootstrap';



function App() {
  const student = [
    { name: 'saurabh',
     rollNo: 1021,
      email: 'saurabh@test.com' },

      { name: 'yogesh',
      rollNo: 1022,
       email: 'yogesh@test.com' },
      
       { name: 'shubham',
       rollNo: 1022,
      email: 'shubham@test.com' }]



  return (
    <div >
      <h2>Handle array with list</h2>
      <Table striped bordered hover variant="dark">
        <thead>
      <tr>
            <td>Name</td>
            <td>Roll No</td>
            <td>Email</td>
          </tr>
          </thead>
          <tbody>
      {
        student.map((data,D) =>
         data.rollNo === 1022 ?
          <tr key={D} >
            <td>{data.name}</td>
            <td>{data.rollNo}</td>
            <td>{data.email}</td>
          </tr>:null
          )
      }
      </tbody>
      </Table>
    </div >
  );
}

export default App;


// function App() {
//     const student = [
//       {
//         name: 'saurabh', rollNo: 1021,
//         email: 'saurabh@test.com',
//         address: [{
//           Hn: 11, city: 'pune', country: 'India'},
//          {Hn: 12, city: 'Nagpur', country: 'India'},
//         { Hn: 13, city: 'Hyderabad', country: 'India'},
//          {Hn: 14, city: 'Mumbai', country: 'India'}
//         ]
//       },
  
//       {
//         name: 'yogesh',
//         rollNo: 1022,
//         email: 'yogesh@test.com',
//         address: [{
//           Hn: 11, city: 'pune', country: 'India'},
//          {Hn: 12, city: 'Nagpur', country: 'India'},
//         { Hn: 13, city: 'Hyderabad', country: 'India'},
//          {Hn: 14, city: 'Mumbai', country: 'India'}
//         ]
//       },
  
//       {
//         name: 'shubham',
//         rollNo: 1022,
//         email: 'shubham@test.com',
//         address: [{
//           Hn: 11, city: 'pune', country: 'India'},
//          {Hn: 12, city: 'Nagpur', country: 'India'},
//         { Hn: 13, city: 'Hyderabad', country: 'India'},
//          {Hn: 14, city: 'Mumbai', country: 'India'}
//         ]
//       }]
  
  
  
//     return (
//       <div >
//         <h2>Nested list in React with Bootstrap table</h2>
//         <Table striped bordered hover variant="dark">
//           <tbody>
//             <tr>
//               <td>Sr No.</td>
//               <td>Name</td>
//               <td>Roll No</td>
//               <td>Email</td>
//               <td>address</td>
//             </tr>
//           </tbody>
//           <tbody>
//             {
//               student.map((data,D) =>
//                   <tr key={D}>
//                     <td>{D+0}</td>
//                     <td>{data.name}</td>
//                     <td>{data.rollNo}</td>
//                     <td>{data.email}</td>
//                     <td>
//                       <Table striped bordered hover variant="dark">
//                          <tbody>
//                            {
//                            data.address.map((item,i)=>
//                              <tr key={i}>
//                                <td>{item.Hn}</td>
//                                <td>{item.city}</td>
//                                <td>{item.country}</td>
//                              </tr>
//                            )
//                            }
//                          </tbody>
//                       </Table>
//                     </td>
//                   </tr> 
//               )
//             }
//           </tbody>
//         </Table>
//       </div >
//     );
//   }
  
//   export default App;
  