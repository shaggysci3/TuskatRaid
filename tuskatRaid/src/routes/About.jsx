import { useState } from "react"
// import Switch from "../components/Switch"

const About = () =>{
 

 
   

    return(
      <>
      <div style={{padding:"90px 0px 20px 30px",display:"flex",flexDirection:"column", alignItems:"center"}} className="pageContainer">
      <div className="aboutContainer">

        <h1>about our band</h1>
        <p>Formed in a galaxy far, far away, Tusken and the raiders travel around playing new and local music for their legions of adoring fans. Comprising of:</p>
        <ul>
          <li>Brian</li>
          <li>Justin</li>
          <li>Alex</li>
          <li>J.P.</li>
        </ul>
          <p>this fearsome foursome has played such venues as Mos Eisley Cantina, the Moons of Yavin Tavern, and Simerville Porchfest in Boston.</p>
      </div>
      </div>
        
      </>
    )
  }
  export default About