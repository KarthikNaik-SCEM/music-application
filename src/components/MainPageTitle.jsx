import React, { useState } from 'react'
import MusicFileUploadModal from './MusicFileUploadModal';

const MainPageTitle = ({setLibSearch,libSearch}) => {

  const [musicUploadModal, setMusicUploadModal] = useState(false)
  const openMusicUploadModal=()=> setMusicUploadModal(true);
    
  const closeMusicUploadModal=()=> setMusicUploadModal(false);



  return (
    <div className='flex justify-between items-center my-2'>
        <p className='text-3xl font-semibold px-2'>
            My Music
        </p>
        <div className='flex gap-3'>
            <input type="text" className='rounded-full border-2 border-black outline-none p-2 text-sm' placeholder='Search Library' value={libSearch} onChange={(e)=>{setLibSearch(e.target.value)}}/>
            <button className={`h-fit w-fit py-2 px-4 bg-[#fcccff] rounded-full font-semibold`} onClick={()=>{openMusicUploadModal()}}>+ upload music</button>
        </div>

        {musicUploadModal && <div className='fixed left-0 top-0 min-h-screen w-full bg-slate-700  bg-opacity-10 z-10'><MusicFileUploadModal closeModal={closeMusicUploadModal}/></div> }

    </div>
  )
}

export default MainPageTitle