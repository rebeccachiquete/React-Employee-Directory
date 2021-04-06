import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Employee from "./components/Employee/Employee"

function App() {
  const [users,setUsers] = useState({})
  useEffect(function(){
    axios("https://randomuser.me/api/?results=10").then(function(response){
    setUsers(response.data.results)
    })
  },[])
  console.log(users)
  return (
   <Employee/>
  )
}

export default App
