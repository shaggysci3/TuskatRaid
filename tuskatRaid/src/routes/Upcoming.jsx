import { useEffect, useState } from "react"
import Events from "../components/Events"
import { Link, useOutletContext, useRouteLoaderData } from "react-router-dom"
import AddShow from "../components/AddShow"
import PatchShow from "../components/PatchShow"

const Upcoming = () =>{
  const[userData,setUserData]=useOutletContext()
  const[allShows,setAllShows]=useState([])
  


 

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://birds-ub6e.onrender.com/shows");
      const ShowArr = await response.json();
      setAllShows(ShowArr);
    };
    fetchProducts().catch(console.error);
  }, []);

  let shows = allShows.map((shows,index)=>{
    return <Events key={index} id={shows.id} name={shows.name} date={shows.date} time={shows.time} img={shows.img} location={shows.location} />
   })
  

    return(
      <>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}} className="pageContainer">
          
         {userData.id==8?<>
          <div className="addingShows">?</div>
          <AddShow/>
            {/* <img src='https://media1.giphy.com/media/ZBQhoZC0nqknSviPqT/giphy.webp?cid=790b76113a8mnmiu77055p86djrbg9zs0uwf8hxud4njltx5&ep=v1_gifs_search&rid=giphy.webp&ct=g'></img> */}
          </>:<></>}
          {allShows===0?<>
            <h1>shows loading please hold</h1>
            
          </>:<>{shows}</>}
         <Link style={{color:"black",borderColor:"black",marginTop:"20px"}} className="navLink"  to="/admin">login</Link>


      </div>
      </>
    )
  }
  export default Upcoming