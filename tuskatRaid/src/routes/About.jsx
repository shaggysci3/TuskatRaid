import { useEffect, useState } from "react"
import PatchAbout from "../components/PatchAbout"
import { useOutletContext } from "react-router-dom"
import AboutIcon from "../components/AboutIcon"
// import Switch from "../components/Switch"

const About = () =>{
 const[Info,setInfo]=useState()
 const[loading,setLoading]=useState()
 const[userData,setUserData]=useOutletContext()
 

//  fetch shows from the databse
useEffect(() => {
  setLoading(true)
  const fetchInfo = async () => {
    const response = await fetch("https://birds-ub6e.onrender.com/about/1");
    const InfoArr = await response.json();
    setInfo(InfoArr);
    setLoading(false)
  };
  fetchInfo().catch(console.error);
}, []);
// console.log("about section",Info.about)
 
   

    return(
      <>
      <div style={{padding:"90px 0px 20px 30px",display:"flex",flexDirection:"column", alignItems:"center",backgroundImage:"url(https://imgs.search.brave.com/ngGkzLYgmJ6Y1PBFX_CtiQHKAdthWjmZBtBdXuAm3pU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZXNhaHViYmxlLm9y/Zy9hcmNoaXZlcy9p/bWFnZXMvd2FsbHBh/cGVyMi9oZWljMTUw/OWEuanBn)"}} className="pageContainer">
      
      
      
      <div className="aboutContainer">

        <h1>about our band</h1>
        {Info?<>
        <p>{Info.about}</p>
          
            
          </>:<><h1>Loading</h1></>}
          <div style={{display:"flex"}}>


        <dl>
          <dd>
            <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/4312/4312699.png"></img>Brian
            </dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/5096/5096217.png"></img>Justin
          </dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/26/26478.png"></img>Alex
          </dd>
          <dd>
          <img style={{padding:"10px"}} className="bandIcon" src="https://cdn-icons-png.flaticon.com/512/1789/1789712.png"></img>J.P.
          </dd>
        </dl>
        {userData.id==1?<>
        <PatchAbout />
          </>:<></>}
          {/* <p>this fearsome foursome has played such venues as Mos Eisley Cantina, the Moons of Yavin Tavern, and Simerville Porchfest in Boston.</p> */}
          </div>
      </div>
      </div>
        
      </>
    )
  }
  export default About