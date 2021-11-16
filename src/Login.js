import { useState } from 'react'
import './App.css';

function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    function loginHandle(e) {
        e.preventDefault()
    }
    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
    }
    function passHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
    }

    return (
        <div className="App">
            <h2>Login form in React</h2>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter name" onChange={userHandler} /> {userErr?<span>enter valid name</span>:""}
                <br /><br />
                <input type="text" placeholder="Enter password" onChange={passHandler} /> {passErr?<span>enter valid password</span>:""}
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login