import React, { useState } from "react"

import YoutubeEmbed from "../components/YoutubeEmbed"
import ReactPlayer from "react-player"

const Recording = () =>{
 const videoID= "kJJ9oAjkABk"

 
   

    return(
      <>
      
      <div className="pageContainer">
        <div className="recordingPage">
          {/* <h1>we have no past shows at the moment</h1> */}
          
          <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoID}`}
        // frameBorder="0"
        allowFullScreen
      ></iframe>          {/* <YoutubeEmbed videoId="uTpSm5AZzT0" /> */}
        </div>
      </div>
        
      </>
    )
  }
  export default Recording