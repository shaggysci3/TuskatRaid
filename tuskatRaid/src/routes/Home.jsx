import { useState } from "react"
import { Link } from "react-router-dom"

const Home = () =>{
 

 
   

    return(
      <>
      <div className="homePage">
        <div className="slider">
            <img className="logoHome" src="https://cdn.pixilart.com/photos/large/02c512aec78be97.png"></img>
            <div className="buttonContainer">
            <Link className="start">Events</Link>
            <Link className="start">Listen</Link>
            <Link className="start">Listen</Link>
            </div>
        </div>
        <div className="albums">
            <img src=""></img>
        </div>
        {/* <h1>Home/Landing Page</h1> */}
        {/* <img src="https://cdn.pixilart.com/photos/large/0e27337e9a11f7d.png"></img> */}
      </div>
        
      </>
    )
  }
  export default Home