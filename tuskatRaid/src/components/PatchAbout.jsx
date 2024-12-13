import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useOutletContext, useRouteLoaderData } from 'react-router-dom';

const PatchAbout = ({}) => {
  // states
  // const [showForm, setShowForm] = useState(false);
//   const[userData,setUserData]=useOutletContext()

//  fetch shows from the databse

const[Info,setInfo]=useState()
useEffect(() => {
  // setLoading(true)
  const fetchInfo = async () => {
    const response = await fetch("https://birds-ub6e.onrender.com/about/1");
    const InfoArr = await response.json();
    setNewInfo(InfoArr);
    // setLoading(false)
  };
  fetchInfo().catch(console.error);
}, []);

  const [newInfo, setNewInfo] = useState({
    about:`${Info}`,
    
  });


  function handleChange(e) {
    console.log(newInfo)
    setNewInfo({
      ...newInfo,
      [e.target.id]: e.target.value,
    });
  }

//   async function handleSubmit(e) {
//     e.preventDefault();
//     console.log("form submitted")
    
    
//   }
  

  


  // update user function (PATCH request)
  async function updateUser(e) {
    e.preventDefault();
    
    try {
      const response = await fetch(`https://birds-ub6e.onrender.com/about/1`, {
        method: 'PATCH', // Change method to PATCH
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            about: newInfo.about, 
        }),
      });

      if (response.ok) {
        alert(`about band updated successfully`)
        console.log(` updated successfully`);
        setNewInfo({
            about:""
          })
      } else {
        alert(`Failed to update user with ID `)
        console.error(`Failed to update user with ID `);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  return (
    <>
    <div style={{margin:"17px"}}  className='updateContainer'>
      
        <form  onSubmit={updateUser}>
        
        <div className='form'>
        <label>change about section</label>
        <textarea
          rows="10"
          cols="40"
          
          className=''
          placeholder='edit about section...'
          type='text'
          id='about'
          value={newInfo.about}
          onChange={handleChange}
          />
        
        <Button className='navLink' style={{color:"black",borderColor:"black",fontSize:"10pt"}} type="submit">Submit</Button>
        </div>
        
        
      </form>
       
       </div>
    </>
  );
};

export default PatchAbout;
