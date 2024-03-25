import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import MusicEditModal from './MusicEditModal';
import { FaTrash } from "react-icons/fa";
import { TbStatusChange } from "react-icons/tb";

const MusicEntry = ({musicID,musicName,ImageSrc,musicFile,setMusic,noOfSaves}) => {

  const loc= useLocation();

  const [editModal, setEditModal] = useState(false)
  const openEditModal=()=> setEditModal(true);
    
  const closeEditModal=()=> setEditModal(false);

  const handleDelete=async()=>{
            const json = await fetch(`http://localhost:3000/musicroutes/musicdelete/${musicID}`,{
            method:"DELETE"
        })
  }

  const handlePlay=()=>{
    // localStorage.removeItem("musicFile")
    // localStorage.setItem("musicFile",musicFile)
    // window.location.reload();
    setMusic(musicFile)
  }

  const handleSave=async()=>{
    console.log(noOfSaves)

    const json = await fetch(`http://localhost:3000/musicroutes/musicnoofsaves/${musicID}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({"noOfSaves":noOfSaves})
        })

      const json1=await fetch("http://localhost:3000/musicroutes/musicentry",{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "auth-token":localStorage.getItem("authToken")
        },
        body:JSON.stringify({"musicfile":musicFile,"musicTitle":musicName,"isPublic":false})

    })
  }

  

  return (
    <div className='flex items-center gap-3 relative'>
        <img src={ImageSrc} alt="Music_Image" className='h-16 w-16 rounded-lg'/>
        <p className='font-semibold max-w-52'>
            {musicName}
        </p>
        <div className='flex gap-7'>
          <button onClick={handlePlay} className='border-2 border-green-700 p-2 rounded-lg text-green-700'>Play Music</button>
          {/* {loc.pathname==="/searchmusic"?<button onClick={handleSave}>Save Music</button>:""} */}
        </div>

        {loc.pathname==='/'?
        <div className='absolute -left-8 flex flex-col items-center gap-3'>
          <button onClick={handleDelete}><FaTrash className=''/></button>
          <button onClick={openEditModal}><TbStatusChange className='h-6 w-6'/></button>
        </div>:""}
        {editModal && <div className='fixed left-0 top-0 min-h-screen w-full bg-slate-700  bg-opacity-10 z-10'><MusicEditModal musicID={musicID} closeModal={closeEditModal}/></div> }

    </div>
  )
}

export default MusicEntry