import React,{useState} from 'react'
import './App.css';



function Hoc ()
{
  return(
    <div className="App">
       <h2>Higher Order Component</h2>
       <HOCred hoc={Counter}/>
      <HOCgreen hoc={Counter}/>
      <HOCblue hoc={Counter}/>
       {/* <Counter /> */}
    </div>
  );
}

function HOCred(props){
  return (
     <h2 style={{backgroundColor:'red',width:150}}><props.hoc/></h2>
    )
}
function HOCgreen(props){
  return (
     <h2 style={{backgroundColor:'green',width:150}}><props.hoc/></h2>
    )
}
function HOCblue(props){
  return (
     <h2 style={{backgroundColor:'blue',width:150}}><props.hoc/></h2>
    )
}

function Counter(){
  const  [count,setCount]=useState(0)
  return(
    <div className="App">
      <h2>HOC</h2>
      <h2>{count}</h2>
      <button onClick={()=>setCount(count +1)}>Update</button><br/><br/>
    </div>
  )
}
export default Hoc;