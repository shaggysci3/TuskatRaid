import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"

const Featured = () =>{
 const[songs,setSongs]=useState()
 const[loadingSong,setLoadingSong]=useState(true)
 const[userData,setUserData]=useOutletContext() 
 let song
 let featuredSongs

  useEffect(() => {
    try{

      setLoadingSong(true)
      const fetchSongs = async () => {
        const response = await fetch("https://birds-ub6e.onrender.com/album/2");
        const songArr = await response.json();
        setSongs(songArr);
        // setLoading(false)
      };
      fetchSongs().catch(console.error)
    }catch{
      console.error("Error adding user:", error);
    }finally{
      setLoadingSong(false)
      // song = songs[0].map((song,index)=>{
      //   return <h1 key={index} ></h1>
      //  })
      
    }
  }, []);
  async function onLeftClick(e){
    if(userData.id==1){
      console.log(e.target.value)}
  }
  if(songs){
    // song = songs.filter((song)=>{
    //   return song.album_id === 1
    //  })
    //  console.log("this is what the fetch is getting: " ,songs.songs)
     featuredSongs = songs.songs.map((songs)=>{
        return <li value={songs.id} onClick={onLeftClick}  className={userData.id==1?"albumSong":""} key={songs.id}>{songs.song}</li>
     })
     
  }
  
  // song = songs.map((song,index)=>{
  //   return <h1 key={index} >{song.song.id}</h1>
  //  })
 
    

 
   

    return(
      <>
      <div className="albumContainer">
            <img  className="albumCover" src="https://cdn.pixilart.com/photos/large/e87ac512e08f0a1.png"></img>
            <ul>
                <h2>Songs</h2>
                {loadingSong?<>
                  <img style={{maxBlockSize:"60px"}} src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzM3aDk2bjN3NGNxMWplMTJjMjBpN3ZzMHQ3emd1NWtuOHF3b3A5cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fUMJgJ56wTGa67VVH9/giphy.gif'></img>
                </>:<>
                {featuredSongs}
                </>
                

                }
                {/* <li>The Terrapinix Terror</li>
                <li>Crushing Defeat</li>
                <li>Revegify</li>
                <li>Tusk Town</li> */}
            </ul>
            </div>
        
      </>
    )
  }
  export default Featured