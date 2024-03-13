import React, { useState } from 'react'
import { default_user } from '../assets/Images'
import { useNavigate } from 'react-router-dom'
import UserAccountModal from './UserAccountModal'

const UserAccount = () => {
    const nav=useNavigate()
    const [userModal, setUserModal] = useState(false)
    const handleLogOut=()=>{
      localStorage.removeItem("authToken");
      nav("/login");
    }
    const openUserModal=()=> setUserModal(true);
    
    const closeUserModal=()=> setUserModal(false);


  return (
    <div className='flex flex-row justify-end items-center'>
        <button className={`h-fit w-fit p-2 bg-[#fcccff] rounded-full font-semibold border-2 border-black ${localStorage.getItem("authToken")?"mx-3":''}`} onClick={()=>{handleLogOut()}}>{localStorage.getItem("authToken")?"Log Out":"Login/Sign Up"}</button>
        {localStorage.getItem("authToken")?<img src={default_user} className='cursor-pointer' alt="User Icon" height={50} width={50} onClick={()=>{openUserModal()}}/>:""}

        {userModal && <div className='fixed left-0 top-0 min-h-screen w-full bg-slate-700  bg-opacity-10'><UserAccountModal closeUserModal={closeUserModal}/></div> }
    </div>
  )
}

export default UserAccount