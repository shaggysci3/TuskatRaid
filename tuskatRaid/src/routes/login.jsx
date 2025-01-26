
import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { useOutletContext } from 'react-router-dom'






const Login = () => {
  const [userInfo,setUserInfo]=useState({
    username:"",
    password:""
  })
  const[userData,setUserData]=useOutletContext()
  const[loading,setLoading]=useState(false)
  const[logged,setLogged]=useState(false)

  

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)
    const newUser = {
      username: userInfo.username,
      password: userInfo.password
    }
    try {
      const response = await fetch("https://birds-ub6e.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        setLogged(false)
        alert(`Username or Password incorrect`)
        console.error(`Failed to add user. Status: ${response.status}`);
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedUser = await response.json();
      sessionStorage.setItem('token', JSON.stringify(addedUser))
      console.log(addedUser)
      setLogged(true)
      
      setUserData(addedUser)
      
  
      // Clear the form after successful submission
      setUserInfo({
        username: "",
        password: "",
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      console.error("Error adding user:", error);
    }finally{
      
      setLoading(false)
      
    }
    

  }
  function handleChange(e){
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });

  }

  return (
    <>
    <div className='pageContainer'>

    <div style={{display:'flex', alignContent:'center',justifyContent:'center',alignItems:'center',flexDirection:"column"}}>
    {logged?(<h1>you are logged in {userData.name}</h1>):(<><div>
    <Card style={{display:'flex'}}>
      <Form style={{alignItems:"center"}} className='form' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control onChange={handleChange} type="text"  value={userInfo.username} name= 'username' placeholder="Enter User Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" placeholder="Password" value={userInfo.password} name= 'password'/>
      </Form.Group>
      <Button  type='submit'>submit</Button>
    </Form>
    </Card>
      </div></>)}
    {loading?<>
    
      <img src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzM3aDk2bjN3NGNxMWplMTJjMjBpN3ZzMHQ3emd1NWtuOHF3b3A5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUMJgJ56wTGa67VVH9/giphy.gif'></img>
    </>:<></>}
    </div>
    </div>
    </>
  )
}

export default Login
