import { useState } from "react"
import { Link } from "react-router-dom"

const YoutubeEmbed = ({videoId}) =>{
 

 
   

    return(
      <>
      <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        
        allowFullScreen
        title="Embedded YouTube"
      />
      </div>
        
      </>
    )
  }
  export default YoutubeEmbed