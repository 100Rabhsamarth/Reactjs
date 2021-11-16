import React,{useState,useMemo} from 'react'
import './App.css';



function App ()
{
  const [count,setCount]=useState(0)
  const [item,setItem]=useState(10)
  
  const countUpdate = useMemo(
    function countUpdate(){
      console.warn('countUpdate')
      return count*5
    },[count])

  return(
    <div className="App">
      <h2>useMemo in React</h2>
      <h2>Count{count}</h2>
      <h2>Item{item}</h2>
       <h2>{countUpdate}</h2>
      <button onClick={()=>setCount(count +1)}>Count Update</button> 
      <button onClick={()=>setItem(item *10)}>Item Update</button>
    </div>
  );
}

export default App;


