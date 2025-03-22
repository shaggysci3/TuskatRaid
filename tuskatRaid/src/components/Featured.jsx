import { useEffect, useState } from "react"
import { Link, useOutletContext } from "react-router-dom"
import EditAlbum from "./EditAlbum"
import Song from "./Song"

const Featured = () =>{
 const[songs,setSongs]=useState()
 const[allSongs,setAllSongs]=useState([])
 const[loadingSong,setLoadingSong]=useState(true)
 const[userData,setUserData]=useOutletContext() 
 const[editAlbum,setEditAlbum]=useState(false);
 const[selectedAlbum,setSelectedAlbum]=useState(null)
 const[update,setUpdate]=useState(false)
 let song
 let featuredSongs

  useEffect(() => {
    try{

      setLoadingSong(true)
      const fetchalbum = async () => {
        const response = await fetch("https://birds-ub6e.onrender.com/album/2");
        const albumArr = await response.json();
        setSongs(albumArr);1951
      };
      const fetchSongs = async () => {
        const response = await fetch("https://birds-ub6e.onrender.com/song");
        const songArr = await response.json();
        setAllSongs(songArr);
      };
      fetchSongs().catch(console.error)
      fetchalbum().catch(console.error)
    }catch{
      console.error("Error adding user:", error);
    }finally{
      console.log("this is all songs: ",allSongs)
      // song = allSongs.map((song)=>{
      //     return <Song key={song.id}  album={selectedAlbum} songId={song.id} songName={song.song}/>
      //    })
      setLoadingSong(false)
    }
  }, []);
  async function onLeftClick(e){
    e.preventDefault();
    
    try {
      const response = await fetch(`https://birds-ub6e.onrender.com/song/${e.target.value}`, {
        method: 'PATCH', //method is PATCH (fetch needs a method (i.e. POST, PATCH, DELETE, GET))
        headers: {
          'Content-Type': 'application/json', //
        },
        body: JSON.stringify({ //JSON.stringify turns the object into a string because better to send than objects
          album_id: "2",
        }),
      });
      
      if (response.ok) {
        alert(`song has been added to album 2`)
        
        console.log(` updated successfully`);
        
      } else {
        alert(`Failed to update user with ID `)
        console.error(`Failed to update user with ID `);
      }
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }
  
  function doNothing(){
    
  }
  
  if (allSongs){
    // let filteredSong = allSongs.filter((song)=>{
    //   console.log("This is selected Album",selectedAlbum)
    //   return song.album_id !== selectedAlbum
    //  })
    //  console.log("this is filteded songs from the all song list: " ,filteredSong)
    song = allSongs.map((song)=>{
      return <Song update={update} edit={selectedAlbum==song.album_id?"selectedFlicker":"flicker"} key={song.id} currentAlbum={song.album_id}  album={selectedAlbum} songId={song.id} songName={song.song}/>
    })
    console.log("this is song",song)

  }
  

  if(songs){
    <h1>{songs}</h1>
     featuredSongs = songs.songs.map((songs)=>{
        return <li value={songs.id} onClick={userData.id==1?onLeftClick:doNothing()}  className={userData.id==1?"albumSong":""} key={songs.id}>{songs.song}</li>
     })
     
  }
  
  // song = songs.map((song,index)=>{
  //   return <h1 key={index} >{song.song.id}</h1>
  //  })
  function showEditAlbum(){
    
    setEditAlbum(!editAlbum)

  }
  useEffect(() => {
    // console.log("the type of ",typeof selectedAlbum)
}, [selectedAlbum]);

 
   

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
            </ul>
            {userData.id==1?<div>
              
              {editAlbum?<>
              <div className="albumContainer">
                <EditAlbum update={update} setUpdate={setUpdate} setSelectedAlbum ={setSelectedAlbum} selectedAlbum={selectedAlbum}/>
                {selectedAlbum?
                
                <ul>
                  <h1>Add Songs</h1>
                  {song}
                </ul>
                 :<></>}
              </div>
              </>:<></>
              }
              
              <button style={{borderColor:"black",color:"black"}} className="navLink" onClick={showEditAlbum}>{editAlbum?"Done":"Edit Albums"}</button>
              </div>:<></>}
            </div>
        
      </>
    )
  }
  export default Featured