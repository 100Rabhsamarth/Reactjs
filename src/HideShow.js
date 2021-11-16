import { useState } from 'react'
import './App.css';

function HideShow() {
  var [status,setStatus]=useState(true)
  return(
    <div className="App">
    {
       status?
       <h2>Hello React</h2>
       :null
    }
    {/* <button onClick={()=>{setStatus(false)}}>Hide</button>
    <button onClick={()=>{setStatus(true)}}>Show</button> */}
    <button onClick={()=>{setStatus(!status)}}>Toggle</button> 
    </div>
  );
  
}

export default HideShow;
