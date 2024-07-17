import { useState } from "react"

const DeleteShow = ({showId}) =>{
 
    async function deleteUser() {
        try {
          const response = await fetch(`https://birds-ub6e.onrender.com/shows/${showId}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          });
    
          if (response.ok) {
            console.log(`User with ID ${showId} deleted successfully`);
          } else {
            console.error(`Failed to delete user with ID ${showId}`);
          }
        } catch (error) {
          console.error('Error deleting user:', error);
        }
      }
 
   

    return(
      <>
      <button className="closeButton" onClick={deleteUser}>X</button>
        
      </>
    )
  }
  export default DeleteShow