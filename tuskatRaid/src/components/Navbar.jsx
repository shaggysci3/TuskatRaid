import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () =>{
 

 
   

    return(
      <>
      <div className="Navbar">
        <Link className="siteName" style={{display:"flex"}}>
        <img className="logo" src="https://cdn.pixilart.com/photos/large/02c512aec78be97.png"></img>
        <h1 style={{margin:"5px",color:"white"}}>Tusken and the Raiders</h1>
        </Link>
        <div className="linkContainer">
        <Link  to={"/"}>
            <h1 className="navLink">Home</h1>
        </Link>
        <Link  to={"/shows"}>
            <h1 className="navLink">Shows</h1>
        </Link>
        <Link  to={"recording"}>
            <h1 className="navLink">recordings</h1>
        </Link>
        </div>
      </div>
        
      </>
    )
  }
  export default Navbar