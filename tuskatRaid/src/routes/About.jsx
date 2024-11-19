import { useState } from "react"
// import Switch from "../components/Switch"

const About = () =>{
 

 
   

    return(
      <>
      <div style={{padding:"90px 0px 20px 30px",display:"flex",flexDirection:"column", alignItems:"center"}} className="pageContainer">
      <div className="aboutContainer">

        <h1>about our band</h1>
        <p>Formed in a galaxy far, far away, Tusken and the raiders travel around playing new and local music for their legions of adoring fans. Comprising of:</p>
        <dl>
          <dd>
            <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/4312/4312699.png"></img>Brian</dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/5096/5096217.png"></img>Justin</dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/26/26478.png"></img>Alex</dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/1789/1789712.png"></img>J.P.</dd>
        </dl>
          <p>this fearsome foursome has played such venues as Mos Eisley Cantina, the Moons of Yavin Tavern, and Simerville Porchfest in Boston.</p>
      </div>
      </div>
        
      </>
    )
  }
  export default About