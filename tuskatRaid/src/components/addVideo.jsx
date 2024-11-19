

// import { Button } from 'react-bootstrap';

import React, { useState, useEffect } from "react";


const AddVideo = ({}) => {
  // states
  
  const [formData,setFormData] = useState({
    videoId:""
    
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
    const newVideo = {
      videoId: formData.videoId,
      
      
    }
    try {
      const response = await fetch("https://birds-ub6e.onrender.com/videoid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newVideo),
      });
  
      if (!response.ok) {
        // Handle the case where the server returns an error status
        console.log(formData)
        console.error(`Failed to add product. Status: ${response.status}`);
        alert("fill all text feilds before submitting")
        return;
      }
  
      // If the request is successful, you can handle the response if needed
      const addedVideo = await response.json();
      console.log("video added:", addedVideo);
      alert("your show has been added")
      // show form again on page
      // setShow(false)
  
      // Clear the form after successful submission
      setFormData({
        videoId:""
      });
  
      // You may want to update your user list or perform other actions here
    } catch (error) {
      
      console.error("Error adding user:", error);
      alert("fill all text feilds before submitting")
    }
    

  }
  function handleClick(){
    
  }
  
  
  return (
    <>
    {/* <div onClick={handleClick} className="closeButton" style={{left:"317px",top:"16px"}}>X</div> */}

    <form className="addForm" onSubmit={handleSubmit}>
      <div className="formItem">
        <label style={{fontFamily:"none"}}>Video Id:</label>
        <br></br>
        <input
        type='text'
        id='videoId'
        value={formData.name}
        onChange={handleChange}/>
      </div>
      
      
      <div>
      <img className='ProductImg-S' src = {formData.img?`${formData.img}`:'https://imgs.search.brave.com/RVhvAn4kkMzSdJkFlO8xlUWHCSWgE7Tog5gRBGWYC3o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9paDEu/cmVkYnViYmxlLm5l/dC9pbWFnZS4xMjY1/NTg5NDE0LjM1MDQv/bXAsNTA0eDQ5OCxt/YXR0ZSxmOGY4Zjgs/dC1wYWQsNjAweDYw/MCxmOGY4ZjgudTMu/anBn'}></img>
      </div>
      
      <button style={{color:"black",borderColor:"black"}} className="start" type="submit">Add</button>
        
    </form>
    </>
  )
}

export default AddVideo