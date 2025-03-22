import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Song from "./Song"

const EditAlbum = ({setUpdate,update,setSelectedAlbum,selectedAlbum}) =>{
    const[albums,setAlbums]=useState([])
    const[featuredSongs,setFeaturedSongs]=useState([])
    const[songs,setSongs]=useState([])
    let album
    const[albumSongs,setAlbumSongs]=useState([])

useEffect(() => {
    try{

    //   setLoadingSong(true)
      const fetchSongs = async () => {
        const response = await fetch("https://birds-ub6e.onrender.com/album");
        const albumArr = await response.json();
        setAlbums(albumArr);
        // setLoading(false)
      };
      fetchSongs().catch(console.error)
    }catch{
      console.error("Error finding albums:", error);
    }finally{
    //   setLoadingSong(false)
      // song = songs[0].map((song,index)=>{
      //   return <h1 key={index} ></h1>
      //  })
      
    }
}, []);

useEffect(() => {
    if(songs.songs){
      // console.log("update album")
      setFeaturedSongs(songs.songs.map((songs)=>{
          return <Song edit={"remove"} album={"1"} songName={songs.song} key={songs.id} songId={songs.id}/>
        })
      )
    }else{
      console.log(
        "song.song does not exist"
      )
    }
}, [songs]);


async function show(e){
  setSelectedAlbum(e.target.value)
  // console.log(update)
  setUpdate(!update)
      
        try{
      
            //   setLoadingSong(true)
              const fetchSongs = async () => {
                const response = await fetch(`https://birds-ub6e.onrender.com/album/${e.target.value}`);
                const songArr = await response.json();
                setSongs(songArr);
                // setLoading(false)
                
              };
              fetchSongs().catch(console.error)
            }catch{
              console.error("Error finding albums:", error);
            }finally{

            }


  }
//   function displaySelectedAlbum(e){
//     setSelectedAlbum(e.target.value)
//     show()
//     console.log("album Id:",e.target.value)
//   }
function updateSong(album){
return(album)
}

  if(albums){
    album = albums.map((album)=>{
        return <li style={{boxShadow:"green"}} className={selectedAlbum==album.id?"selectedFlicker":"flicker"} onClick={(show)} value={album.id}key={album.id}><img style={{paddingInline:"10px",zIndex:"-1",position:"relative"}} className="bandIcon" src={album.img}></img>{selectedAlbum==album.id?`update: ${album.id}`:updateSong(album.id)}</li>
    })
  }

 
   

    return(
      <>
      <div>

     <h1>Albums</h1>
     <ul>
        {album}
     </ul>
     
     <div>
            {featuredSongs}
     </div>
      </div>
        
      </>
    )
  }
  export default EditAlbum