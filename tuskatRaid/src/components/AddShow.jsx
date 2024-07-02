

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddShow = ({setShow}) => {
  // states
  
  const [formData,setFormData] = useState({
    img:"",
    name:"",
    date:"",
    time:"",
    location:"",
    
  });
  
  // post request to post new user and form funtions
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newShow = {
      date: formData.date,
      img:formData.img,
      location: formData.location,
      name: formData.name,
      time: formData.time,
      
    }
    try {
      const response = await fetch("https://birds-ub6e.onrender.com/shows", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newShow),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        console.log(formData)
        console.error(`Failed to add product. Status: ${response.status}`);
        alert("fill all text feilds before submitting")
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedShow = await response.json();
      console.log("show added:", addedShow);
      alert("your show has been added")
      // show form again on page
      // setShow(false)
  
      // Clear the form after successful submission
      setFormData({
        img: "",
        name: "",
        date: "",
        time: "",
        location: "",
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    setShow(false)
  }
  
  
  return (
    <>
    {/* <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div> */}

    <form className="addForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label>Show Name:</label>
        <br></br>
        <input
        type='text'
        id='name'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>date:</label>
        <input
        
        
        type='text'
        id='date'
        value={formData.date}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>time:</label>
        <input
        
        type='text'
        id='time'
        value={formData.time}
        onChange={handleChange}/>
      </div>
      <div style={{position:"relative"}} className="formItem">
        <label>location:</label>
        <input
        type='text'
        id='location'
        value={formData.location}
        onChange={handleChange}/>
      </div>
      <div>
        <label>Diagram Image</label>
        <br></br>
        <input
        type='text'
        id='img'
        value={formData.img}
        onChange={handleChange}/>
      </div>
      <div>
      <img className='ProductImg-S' src = {formData.img?`${formData.img}`:'https://th.bing.com/th/id/OIG1.sMhHsP9hGxIEbPNAqGkZ?pid=ImgGn'}></img>
      </div>
      
      <button className="start" type="submit">Add</button>
        
    </form>
    </>
  )
}

export default AddShow