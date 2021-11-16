import React from 'react';
import './index.css';
function SuperChild(props){
    return(
        <div>
            <h2>pass function as prop</h2>
            <button onClick={props.data}>Call data function</button>
        </div>
    );
}
export default SuperChild;