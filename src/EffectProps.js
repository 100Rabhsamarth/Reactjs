import React, {useState,useEffect} from 'react'
import './App.css';


function Effectprops(props)
{
    useEffect(()=>{
        alert("count. is" +props.count)
    },[props.count]);
    return(
        <div className="App">
            <h2> props :{props.data}</h2>
            <h2>count :{props.count}</h2>
           
        </div>
    );
}

export default Effectprops;