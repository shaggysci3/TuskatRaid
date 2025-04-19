import React, { useEffect, useState } from "react"

import YoutubeEmbed from "../components/YoutubeEmbed"
import ReactPlayer from "react-player"
import { useOutlet, useOutletContext } from "react-router-dom"
import AddVideo from "../components/addVideo"
import Recording from "./Recording"

const Listen = () =>{
    const[userData,setUserData]=useOutletContext()
    const[allVideos,setAllVideos]=useState([])
  


 
    //  fetch shows from the databse
      useEffect(() => {
        const fetchVideos = async () => {
          const response = await fetch("https://birds-ub6e.onrender.com/videoid");
          const VideoArr = await response.json();
          setAllVideos(VideoArr);
        };
        fetchVideos().catch(console.error);
      }, []);
      console.log("allvideos",allVideos)
    
    // map shows to display what you have fetched from the database
      let videos = allVideos.map((videos,index)=>{
        return <Recording key={index} id={videos.id} videoId={videos.videoId} />
       })
      
 
   

    return(
      <>
      <div className="pageContainer" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
      <div className="flicker"  style={{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"}}>
          {videos}
      </div>
      {userData.id==1?<>
          
          

          <AddVideo/>
          
            
          </>:<>
          </>}

        
          </div>
        
      </>
    )
  }
  export default Listen