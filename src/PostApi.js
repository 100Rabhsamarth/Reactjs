import { useState } from 'react';

function PostApi() {

  const [firstname, setName]=useState("");
  const [email, setEmail]=useState("");
  const [address, setAddress]=useState("");
  const [message, setMessage]=useState("");
  function saveData()
  {
    let data={firstname, email, address}
    console.log({firstname, email, address});
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers:{
          'Accept': 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
      }).then((result) =>{
        setMessage('success')
        console.log("result", result);
      })

}
 
  return (
    <>

      {/* When you need to handle multiple controlled input elements, you can add a name attribute to each element and let 
      the handler function choose what to do based on the value of event.target.name */}


      <input type="text" name="firstname" value={firstname} onChange={(e) => {setName(e.target.value)}} ></input> <br/><br/>
      <input type="text" name="email" value={email} onChange={(e) => {setEmail(e.target.value)}} ></input> <br/><br/>
      <input type="text" name="address" value={address} onChange={(e) => {setAddress(e.target.value)}} ></input> <br/><br/>
      <button type="button" onClick={()=>saveData()}>Save user</button>
      

      {
          (message==='success')?
        <>
        <h1>Name: {firstname}</h1>
        <h1>email: {email}</h1>
        <h1>Address: {address}</h1>
        </>
        : <h1> No data sended</h1>

    }
    
    </>
  );
}

export default PostApi;