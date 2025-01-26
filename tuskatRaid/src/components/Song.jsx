import { useState } from "react"
import { Link, useOutletContext } from "react-router-dom"

const Song = ({songName}) =>{
 const[userData,setUserData]=useOutletContext()

 
   

    return(
      <>
      <li className="albumSong">{songName}</li>
        
      </>
    )
  }
  export default Song