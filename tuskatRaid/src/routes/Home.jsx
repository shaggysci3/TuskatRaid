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
        <div className="albumList">
            <h1 className="albumName">featured Album: Terrapinix</h1>
            <div className="albumContainer">
            <img className="albumCover" src="https://cdn.pixilart.com/photos/large/e87ac512e08f0a1.png"></img>
            <ul>
                <h2>Songs</h2>
                <li>The Terrapinix Terror</li>
                <li>Crushing Defeat</li>
                <li>Revegify</li>
                <li>Tusk Town</li>
            </ul>
            </div>
        </div>
        {/* <h1>Home/Landing Page</h1> */}
        {/* <img src="https://cdn.pixilart.com/photos/large/0e27337e9a11f7d.png"></img> */}
      </div>
        
      </>
    )
  }
  export default Home