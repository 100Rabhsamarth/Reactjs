import React, { useEffect, useState } from 'react'
import './App.css'
import { Table, Button } from 'react-bootstrap';



function FetchData(){
    const [data, setData] = useState([])
    useEffect(() => {
        console.warn("Useeffect")
       
    }, [])
    //console.warn(data)
    function GetList(){
        fetch('http://localhost:3000/users').then((result) => {
            result.json().then((resp) => {
                setData(resp)
            })
        })
     }
function DeleteData(props){
        alert("Delete data")
        fetch(`http://localhost:3000/users/${props.id}`,{
            method:'DELETE'
        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
                GetList() 
               
            })
        })       
       
    }
    function Click(){
        GetList()
    }
    
   
    return(
        <div>
            <h2>Delete Data with API call</h2>
            <Button onClick={()=>Click()}> Click </Button>
            <Table striped bordered hover variant="dark" width="200">
                <tbody>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                        <td>City</td>
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
                            <td><button onClick={()=> DeleteData(users.id )}>Delete</button></td>
                        </tr>

                        )
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default FetchData
