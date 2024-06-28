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

      </div>
        
      </>
    )
  }
  export default Footer