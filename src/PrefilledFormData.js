import React, { useEffect, useState } from 'react'
import './App.css'
import { Table, Button } from 'react-bootstrap';



function FetchData() {
    const [data, setData] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [contact, setContact] = useState("")
    const [city, setCity] = useState("")

    useEffect(() => {
        GetList()
    }, [])

    function GetList() {
        fetch('http://localhost:3000/users').then((result) => {
            result.json().then((resp) => {
                setData(resp)
                setName(resp[0].name)
                setEmail(resp[0].email)
                setContact(resp[0].contact)
                setCity(resp[0].city)
            })
        })
    }
    function DeleteData(id) {

        fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                GetList()

            })
        })

    }

    function SelectData(id) {
       
        console.warn(data[id - 1])
        let users=data[id - 1]
        setName(users.name)
        setEmail(users.email)
        setContact(users.contact)
        setCity(users.city)
    }


    return (
        <div>
            <h2>Delete Data with API call</h2>

            <Table striped bordered hover variant="dark" width="200">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>City</td>
                        <td>Operation</td>
                        <td>Operation</td>
                    </tr>
                    {
                        data.map((users) =>
                            <tr>
                                <td>{users.id}</td>
                                <td>{users.name}</td>
                                <td>{users.email}</td>
                                <td>{users.contact}</td>
                                <td>{users.city}</td>
                                <td><Button onClick={() => DeleteData(users.id)}>Delete</Button></td>
                                <td><Button onClick={() => SelectData(users.id)}>Update</Button></td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>
            <div className="App">

                <input type='text' value={name} /><br /><br />
                <input type='text' value={email} /><br /><br />
                <input type='text' value={contact} /><br /><br />
                <input type='text' value={city} /><br /><br />
                <button>Update User</button>
            </div>
        </div>
    )
}

export default FetchData
