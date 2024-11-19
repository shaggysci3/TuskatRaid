import React, { useState } from "react"

import YoutubeEmbed from "../components/YoutubeEmbed"
import ReactPlayer from "react-player"
import { useOutletContext } from "react-router-dom"
import DeleteVideo from "../components/DeleteVideo"

const Recording = ({id,videoId}) =>{
 const videoID= "kdvl2ThDZEM"
 const[userData,setUserData]=useOutletContext()
 
 console.log(videoId)

 
   

    return(
      <>
      
      {/* <div className="pageContainer"> */}
        {/* <div className="recordingPage"> */}
          {/* <h1>we have no past shows at the moment</h1> */}
          <div style={{padding:"10px"}}>
          {userData.id==1?<div>
      <DeleteVideo videoId={id}/>

      </div>:<div>
      </div>}
          <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        // frameBorder="0"
        allowFullScreen
        ></iframe>          {/* <YoutubeEmbed videoId="uTpSm5AZzT0" /> */}
        </div>
        {/* </div> */}
      {/* </div> */}
        
      </>
    )
  }
  export default Recording