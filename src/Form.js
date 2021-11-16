import { useState } from 'react'
import './App.css';

function Form()
{
    const [name,setName]=useState("")
    const [tnc,setTnc]=useState(false)
    const [interest,setInterest]=useState(true)

    function getFormData(e)
    {
        console.warn(name,tnc,interest)
       e.preventDefault()
    }
    return(
       <div className="App">
           <h2>Form in React</h2>
           <form onSubmit={getFormData}>
               <input type='text' placeholder="user name" onChange={(e)=>{setName(e.target.value)}} /> <br/><br/>
               <select onChange={(e)=>{setInterest(e.target.value)}}>
                   <option>Select option</option>
                   <option>Java</option>
                   <option>React</option>
                   <option>Angular</option>
               </select><br/><br/>
               <input type="checkbox" onChange={(e)=>{setTnc(e.target.ckecked)}} /><span>Accept Term and Condition</span><br/><br/>
               <button onChange={()=>{}}>Submit</button>
           </form>
       </div>
    );
}

export default Form