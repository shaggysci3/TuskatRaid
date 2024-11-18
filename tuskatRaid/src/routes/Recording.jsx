import React, { useState } from "react"

import YoutubeEmbed from "../components/YoutubeEmbed"
import ReactPlayer from "react-player"

const Recording = () =>{
 

 
   

    return(
      <>
      
      <div className="pageContainer">
        <div className="recordingPage">
          {/* <h1>we have no past shows at the moment</h1> */}
          
          <iframe src="https://drive.google.com/file/d/1clmeKh7KyFxM9W9gDwJZ2kAMF5ecRjIO/preview" width="640" height="480" allow="autoplay"></iframe>
          {/* <YoutubeEmbed videoId="uTpSm5AZzT0" /> */}
        </div>
      </div>
        
      </>
    )
  }
  export default Recording