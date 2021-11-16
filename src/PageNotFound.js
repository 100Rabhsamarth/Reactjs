import React from 'react'
import './App.css'
import {BrowserRouter as Router,Link,Route, Switch} from 'react-router-dom';
function PageNotFound() {
    return (
        <div>
            <Router>
                <Link to='/home'>Home</Link><br/>
                <Link to='/about'>About</Link><br/>
                <Link to='/contact'>contact</Link><br/>

                <Switch>
                <Route path='/home'><Home/></Route>
                <Route path='/about'><About/></Route>

                <Route path='/*'><PNF/></Route>
                 </Switch>
            </Router>
        </div>
    )
}

export default PageNotFound


function Home() {
    return (
        <div>
            <h2>Home</h2>
            <p>Home from Website</p>
        </div>
    )
}



function About() {
    return (
        <div>
            <h2>About</h2>
            <p>About from website</p>
        </div>
    )
}
function PNF() {
    return (
        <div>
            <h2>404</h2>
            <p>Page Not Found</p>
        </div>
    )
}




