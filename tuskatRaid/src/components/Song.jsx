import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"

const Song = ({album,songId,songName,edit,update,currentAlbum}) =>{
 const[userData,setUserData]=useOutletContext()
 const[song,setSong]=useState({})
 const[selected,setSelected]=useState(false)


 async function onLeftClick(){
  console.log(currentAlbum)
  setSelected(!selected)
      try {
        const response = await fetch(`https://birds-ub6e.onrender.com/song/${songId}`, {
          method: 'PATCH', //method is PATCH (fetch needs a method (i.e. POST, PATCH, DELETE, GET))
          headers: {
            'Content-Type': 'application/json', //
          },
          body: JSON.stringify({ //JSON.stringify turns the object into a string because ypou cabnt send objects
            album_id: `${album}`,
          }),
        });
        
        if (response.ok) {
          console.log(`song ${songId} has been added to ${album}`)
          console.log(`updated successfully`);
          
        } else {
          alert(`Failed to update user with ID `)
          console.error(`Failed to update user with ID `);
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
} 

useEffect(() => {
  setSelected(false)
}, [update]);

function setGlow(){
  if (edit == "remove"){
    return selected?"redFlicker":"flicker"
  }else{
    return selected?"selectedFlicker":"flicker"
  }
}
  
  
   

    return(
      <>
      <div onClick={onLeftClick}>
      <h3 className={setGlow()} >{songName?songName:song.song}</h3>
      </div>
        
      </>
    )
  }
  export default Song