import React, { useState } from 'react'
import './App.css'
import { Table, Button } from 'react-bootstrap';



function Todo() {
    const [data, setData] = useState([])


    function Getdata() {
        console.warn(data)
        let users = { data }
        fetch("http://localhost:3000/todo",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(users)
            }).then((result) => {
                setData('GET')
                console.log(result)
            })
    }


    return (
        <div className="App">
            <div>
                <h2>TO DO List App</h2>
                <input type='text' value={data} onChange={(e) => setData(e.target.value)}></input><br /><br />
                <Button onClick={() => Getdata(data)}>Add</Button>
            </div><br /><br />
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td>Data</td>
                        </tr>
                        {
                            (data==="GET") ?
                                <tr>
                                    <td>true</td>
                                </tr>
                                :
                                <tr>
                                    <td>false</td>
                                </tr>
                        }
                        {/* {
                            data.map((todo)=>{
                               
                            })
                        } */}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default Todo;
