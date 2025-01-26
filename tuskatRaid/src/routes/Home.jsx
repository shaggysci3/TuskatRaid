import { useState } from "react"
import { Link } from "react-router-dom"
import Featured from "../components/Featured"

const Home = () =>{
 

 
   

    return(
      <>
      <div className="homePage">
        <div className="slider">
            <img className="logoHome" src="https://cdn.pixilart.com/photos/large/02c512aec78be97.png"></img>
            <div className="buttonContainer">
            <Link to={"/admin"} className="start">Login</Link>
            <Link to={"/recording"} className="start">Listen</Link>
            <Link to={"/about"} style={{scrollBehavior:"smooth"}} href="#feature" className="start">About</Link>
            </div>
        </div>
        <div className="albumList">
          <div className="tab"></div>
            <h1 id="feature"  className="albumName">featured Album: Terrapinix</h1>
            <Featured/>
        </div>
        {/* <h1>Home/Landing Page</h1> */}
        {/* <img src="https://cdn.pixilart.com/photos/large/0e27337e9a11f7d.png"></img> */}
      </div>
        
      </>
    )
  }
  export default Home