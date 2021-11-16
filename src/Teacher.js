import React from 'react'
import './App.css';
import App from './Arrays';

function Teacher (props){
    return(
        <div>
            <span>{props.teacher.name}</span>
           <span>{props.teacher.sub}</span>
           <span>{props.teacher.MobNo}</span>
           <span>{props.teacher.email}</span>
        </div>
    )
}
export default Teacher;


// App.js file for teacher component
// function App() {
//     const teacher = [
//       {
//         name: 'Anjali', 
//         Sub : 'Chemistry',
//         MobNo: 8526391457,
//         email: 'Anjali@test.com',
//       },
  
//       {
//         name: 'yogesh',
//         Sub : 'Physics',
//         MobNo: 7485961023,
//         email: 'yogesh@test.com',
//       },
  
//       {
//         name: 'Sonali',
//         Sub : 'Math',
//         MobNo: 9527904474,
//         email: 'sonali@test.com',
       
//       }]
  
  
  
//     return (
//       <div >
//        <h2>Reuse Component in Loop</h2>
       
//        {
         
//          teacher.map((data)=>
         
//          <Teacher teacher={data}/>
//          )
//        }
//       </div >
//     );
//   }
  
//   export default App;
  