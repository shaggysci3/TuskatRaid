import { useState } from "react"
import { useOutletContext } from "react-router-dom";
import PatchShow from "./PatchShow";
import DeleteShow from "./DeleteShow";

const Events = ({id,time,date,location,img,name}) =>{
 
  const numString = time.toString();
  const[userData,setUserData]=useOutletContext()
  

  const hours = parseInt(numString.slice(0, -2), 10);
  const minutes = parseInt(numString.slice(-2), 10);
  
  

    return(
      <>
      <div className="vertical">
        <h1>{name}</h1>
      <div style={{alignItems:"center"}} className="albumContainer">
        <div>
            {/* <h1 style={{textAlign:"center"}}>Show Name</h1> */}
            <img className="albumCover" src={img}></img>
        </div>
        <div className="eventInfo">
      {userData.id==8?<div>
        <DeleteShow showId = {id}/>
        <PatchShow showId={id}/>
      </div>:<></>}
          {/* <h1>Show's Name</h1> */}
          <h2>id:{id}</h2>
          <h2>Date: {date}</h2>
          <h2>time: {hours}:{minutes.toString().padStart(2, '0')}</h2>
          <h2>location: {location}</h2>
        </div>
      </div>
      </div>
        
      </>
    )
  }
  export default Events