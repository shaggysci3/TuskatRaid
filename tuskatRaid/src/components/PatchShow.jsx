import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useOutletContext, useRouteLoaderData } from 'react-router-dom';

const PatchShow = ({showId,showForm,setShowForm}) => {
  // states
  // const [showForm, setShowForm] = useState(false);
//   const[userData,setUserData]=useOutletContext()
  const [newShow, setNewShow] = useState({
    img:"",
    name: "",
    date:"",
    time:"",
    location:"",
  });


  function handleChange(e) {
    console.log(newShow)
    setNewShow({
      ...newShow,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("form submitted")
    updateUser(showId)
    
  }
  

  const toggleForm = () => {
    setShowForm(!showForm);
  };


  // update user function (PATCH request)
  async function updateUser(showId) {
    
    setShowForm(!showForm);
    try {
      const response = await fetch(`https://birds-ub6e.onrender.com/shows/${showId}`, {
        method: 'PATCH', // Change method to PATCH
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            img: newShow.img,
            name: newShow.name,
            date: newShow.date,
            time: newShow.time,
            location: newShow.location
        }),
      });

      if (response.ok) {
        alert(`User with ID ${showId} updated successfully`)
        console.log(`User with ID ${showId} updated successfully`);
        setNewShow({
            img:"",
            name: "",
            date:"",
            time:"",
            location:"",
          })
      } else {
        alert(`Failed to update user with ID ${showId}`)
        console.error(`Failed to update user with ID ${showId}`);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  return (
    <>
    <div className='updateContainer'>
    {!showForm && (
      // <h1>Update Current User</h1>
      <Button className='navLink' style={{color:"black",borderColor:"black"}} onClick={toggleForm}>
        {showForm ? 'UpdateShow' : 'Update show'}
      </Button>
      )}

      
      {showForm && (
        <form  onSubmit={handleSubmit}>
        <Button className='closeForm' onClick={toggleForm}>X</Button>
        <div className='form'>
        <label>new showname</label>
        <input
          className=''
          placeholder='Show name...'
          type='text'
          id='name'
          value={newShow.name}
          onChange={handleChange}
          />
        <label>show date</label>
        <input
          className=''
          placeholder='00/00/00'
          type='text'
          id='date'
          value={newShow.date}
          onChange={handleChange}
          />
        <label>show time</label>
        <input
          className=''
          placeholder='1200'
          type='text'
          id='time'
          value={newShow.time}
          onChange={handleChange}
          />
          <label>show location</label>
        <input
          className=''
          placeholder='Name Location...'
          type='text'
          id='location'
          value={newShow.location}
          onChange={handleChange}
          />
          <label>show image</label>
        <input
          className=''
          placeholder='Img URL'
          type='text'
          id='img'
          value={newShow.img}
          onChange={handleChange}
          />
        <Button className='navLink' style={{color:"black",borderColor:"black",fontSize:"10pt"}} type="submit">Submit</Button>
        </div>
        
        
      </form>
       )}
       </div>
    </>
  );
};

export default PatchShow;
