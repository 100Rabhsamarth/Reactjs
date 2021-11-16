import React,{useState} from 'react'
import './App.css'
function CreateAPI() {
     
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [city,setCity]=useState("")
    const [data,setData]=useState ("")
   
  
  function User(){
    let users={name,email,contact,city}
      
    fetch("http://localhost:3000/users",
    {
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(users)
    }).then((result)=>{  
        setData("SUCCESS")
        console.log(result)
    })
  
  }
    return (
        <div className="App">
            <h2>Create API</h2>
            <input type='text' value={name}  onChange={(e)=>setName(e.target.value)} name='name' placeholder="name"/><br/><br/>
            <input type='text' value={email}   onChange={(e)=>setEmail(e.target.value)} name='email'  placeholder="email"/><br/><br/>
            <input type='text' value={contact}   onChange={(e)=>setContact(e.target.value)} name='contact'  placeholder="Mo no."/><br/><br/>
            <input type='text' value={city}   onChange={(e)=>setCity(e.target.value)} name='city'  placeholder="city"/><br/><br/>
            <button type='button' onClick={()=>User()} name='submit'>Create</button>
            
            {
                (data==="SUCCESS")
                ?
                <h2>True</h2>
                :
                <h2>False</h2>
            }
        </div>
    )
       
    
}

export default CreateAPI




