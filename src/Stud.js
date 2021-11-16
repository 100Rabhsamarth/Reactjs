import React from 'react'
import './App.css'
import {withRouter} from 'react-router-dom';
function Stud(prop) {
    // console.warn(prop.match.params.name)
    return (
        <div className='App'>
            <h2> {prop.match.params.name} </h2>
            <h2>Roll No:- {prop.match.params.rollno} </h2>
            <h2>City:- {prop.match.params.city} </h2>

        </div>
    )
}

export default withRouter(Stud)
