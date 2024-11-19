const DeleteVideo = ({videoId}) =>{
    // const[deleteButton,setDeleteButton]=useState()
  
     async function deleteVideo() {
        console.log(videoId)
         try {
           const response = await fetch(`https://birds-ub6e.onrender.com/videoid/${videoId}`, {
             method: 'DELETE',
             headers: {
               'Content-Type': 'application/json',
             },
           });
     
           if (response.ok) {
             console.log(`User with ID ${videoId} deleted successfully`);
           } else {
             console.error(`Failed to delete user with ID ${videoId}`);
           }
         } catch (error) {
           console.error('Error deleting user:', error);
         }
       }
  
    
 
     return(
       <>
       <button style={{top:"10px",left:"-10px"}} className="closeButton" onClick={deleteVideo}></button>
         
       </>
     )
   }
   export default DeleteVideo