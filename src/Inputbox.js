import { useState } from 'react'
import './App.css';

function Inputbox() {
    const [data,setdata]=useState(null)
    const [print,setPrint]=useState(false)

    function getData(val)
    {
        console.warn(val.target.value)
       setdata(val.target.value)
    }
  return(
    <div className="App">
    {
        print?
        <h2>{data}</h2>
        :null
    }
      <input type='text' onChange={getData}></input>
      <button onClick={()=>{setPrint(true)}}>print data</button>
    </div>
  );
  
}

export default Inputbox;
