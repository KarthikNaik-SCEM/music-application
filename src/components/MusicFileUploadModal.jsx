import React, { useState } from 'react'
import { default_user } from '../assets/Images'
import CloudinaryUpload from './CloudinaryUpload'

const musicEntryInitials={
    musicfile:"", musicTitle:"", isPublic:false
}

const MusicFileUploadModal = ({closeModal}) => {

    const [musicEntry, setMusicEntry] = useState(musicEntryInitials)
    const [errorText, setErrorText] = useState("")


    const handleSubmit=async()=>{
        
        const {musicfile, musicTitle, isPublic} =musicEntry
        if (musicfile ===""|| musicTitle==="" ){
            setErrorText("all fields should be filled")
            setTimeout(() => {
                setErrorText("")
            }, 3000);
            return
        }
        const mu=musicfile.toString()
        const json=await fetch("http://localhost:3000/musicroutes/musicentry",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "auth-token":localStorage.getItem("authToken")
            },
            body:JSON.stringify({musicfile,musicTitle,isPublic})

        })


        closeModal()
        console.log(mu,musicfile, musicTitle, isPublic)
    }

    const handleChange=(e)=>{
        setMusicEntry({...musicEntry,[e.target.name]:e.target.value})
        // console.log(musicEntry)
    }
    const addMusicFile=(result)=>{
        setMusicEntry({...musicEntry,"musicfile":result})
        // console.log(result)

    }
    const handleCheckChange=(e)=>{
        if(e.target.value==="on"){
            setMusicEntry({...musicEntry,[e.target.name]:true});
            
        }
        else{
            setMusicEntry({...musicEntry,[e.target.name]:false});
            
        }
        // console.log(musicEntry)

    }
    

  return (
    <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-1/2 bg-white rounded-md drop-shadow-2xl '>
        <div className='p-3'>
            Music File Upload
        </div>
            <hr />
        <div className='flex flex-col gap-2'>
            {errorText?<p className='text-center my-1 text-red-600'>{errorText}</p>:""}
            <div className='flex flex-col items-center p-4 gap-3'>
                {/* <input type="file" name="musicfile" id="musicfile"  onChange={(e)=>{setMusicEntry({...musicEntry,[e.target.name]:e.target.files[0]})}}/> */}
                <CloudinaryUpload addMusicFile={addMusicFile} />
            </div>
            <div className='flex flex-col p-3 gap-10'>
                <div>
                    <label htmlFor="musicTitle" className=''>Music Title:</label>
                    <input type="text" name='musicTitle' className='ml-3 border border-slate-400' onChange={(e)=>{handleChange(e)}}/>
                </div>
                <div>
                    <label htmlFor="isPublic" className=''>Make Public:</label>
                    <input type="checkbox" name='isPublic' className='ml-3 border border-slate-400' onChange={(e)=>{handleCheckChange(e)}}/>

                </div>
                
            </div>
            <hr className='w-[90%] mx-auto'/>
            
            <div className='flex gap-5 justify-evenly p-3'>
                <button className='text-white font-bold bg-blue-600 text-sm py-1 px-3 rounded-lg size-full' onClick={()=>{handleSubmit()}}>Add Music</button>
                <button className='font-bold text-sm py-1 px-3 border-2 border-gray-300 rounded-lg size-full' onClick={closeModal}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default MusicFileUploadModal