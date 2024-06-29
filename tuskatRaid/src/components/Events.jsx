import { useState } from "react"

const Events = () =>{
 

 
   

    return(
      <>
      <div className="vertical">

        <h1>Show Name</h1>
      <div style={{alignItems:"center"}} className="albumContainer">
        <div>
            {/* <h1 style={{textAlign:"center"}}>Show Name</h1> */}
            <img className="albumCover" src="https://th.bing.com/th/id/OIG3.50du5q9zVEbe1UVrqQeH?pid=ImgGn"></img>
        </div>
        <div className="eventInfo">
          {/* <h1>Show's Name</h1> */}
          <h2>Date: </h2>
          <h2>time: </h2>
          <h2>location: </h2>
        </div>
      </div>
      </div>
        
      </>
    )
  }
  export default Events