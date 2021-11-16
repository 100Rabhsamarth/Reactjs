import React from 'react'
import './App.css';

class Unmount extends React.Component 
{
    componentWillUnmount()
    {
        console.log('componentWillUnmount')
    }
   render(){
       return(
           <div className="App">
            <h2>child component</h2>
           </div>
       );
   }
}
export default Unmount;