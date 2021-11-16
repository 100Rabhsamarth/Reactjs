import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <Link to='/'>Home </Link><br />
            <Link to='/about'>About </Link>
            {/* <a href="/About">About</a> */}
        </div>
    )
}

export default Navbar
