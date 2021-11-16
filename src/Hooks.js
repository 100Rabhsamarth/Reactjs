
import React, {useState,useEffect} from 'react'
import './App.css';
import Effectprops from './EffectProps';

function Hook()
{
    const [count,setCount]=useState(100)
    const [data,setData]=useState(50)
    
    
    return(
        <div className="App">
           <Effectprops count={count} data={data}/>
        
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setData(data+1)}>Update Data</button>
        </div>
    );
}

export default Hook;