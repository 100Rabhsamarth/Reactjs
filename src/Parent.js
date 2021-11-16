import React from 'react';
import './index.css';
import Child from './Child';
import SuperChild from './SuperChild';
function Parent(){
    function getData(){
        alert('hello from React')
    }
    return(
        <div className='App'>
          <Child data={getData}/>
          <Child data={getData}/>
          <Child data={getData}/>
          <Child data={getData}/>
          <div style={{float:'right'}}>
          <SuperChild data={getData}/>
          </div>
        </div>
        
    );
}
export default Parent;