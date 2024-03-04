import React from 'react'
import { FaRegFolderOpen } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLiveHelp } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';


const SideBar = () => {
  const location=useLocation()

  return (
    <div className='bg-[#f8f7f3] min-h-screen  p-7 max-w-44 flex flex-col justify-between'>
        <div>
            <div className='font-josefin text-3xl font-bold'>
                K<span className='font-pacifico text-xl'>&</span>S
            </div>
            <ul className='text-gray-700'>
                <li className={`my-4 hover:text-black hover:font-semibold hover:scale-105 duration-500 ${location.pathname==="/"?"text-black font-semibold":""}`}><Link to="/" className='flex items-center gap-2'><FaRegFolderOpen className='h-6 w-6'/> My Music</Link></li>
                <li className={`my-4 hover:text-black hover:font-semibold hover:scale-105 duration-500 ${location.pathname==="/searchmusic"?"text-black font-semibold":""}`}><Link to="/searchmusic" className='flex items-center gap-2'><IoSearch className='h-9 w-9'/> Find Other Music</Link></li>
            </ul>
        </div>
        <div className='flex items-center cursor-pointer gap-3'>
        <MdOutlineLiveHelp />
        Help
        </div>
        
    </div>
  )
}

export default SideBar