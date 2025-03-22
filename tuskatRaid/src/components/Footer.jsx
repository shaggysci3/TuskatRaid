import { useState } from "react"
import { Link } from "react-router-dom"

const Footer = () =>{
 

 
   

    return(
      <>
      <div className="footer">
        <Link to={"/about"}  >
          <h2 className="footLink">About</h2>
        </Link>
        <Link to={"/contact"} >
          <h2 className="footLink">Contact</h2>
        </Link>
        <Link to={"/admin"}  >
          <h2 className="footLink">Login</h2>
        </Link>
        <Link target="_blank" to={"https://www.instagram.com/tuskenandtheraiders?igsh=Y29kNjhuNzE4ejlo"}  >
          <img style={{maxBlockSize:"40px"}} src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png" className="footLink"></img>
        </Link>

      </div>
        
      </>
    )
  }
  export default Footer