import React from 'react';
import App from './App';
import './index.css';
function Child(props){
    const student={name:'saurabh',rollno:1021}
    return(

        <>
            <h2>user name:</h2>
            <button onClick={()=>props.component(student)}>Click Me</button>
        </>
    );
}
export default Child;

// App.js for send data child to parent

// import React from 'react'
// import './App.css';
// import Child from './Child';

// function App(){
//   function parentalert(student)
//   {
//    console.warn()
//     alert(student.rollno)
//   } 

//   return(
//     <div className="App">
//       <h2>send data child to parent</h2>
//          <Child component={parentalert} />
//     </div>
//   );
// }

// export default App;