import React, { useState } from 'react'
import { default_user } from '../assets/Images'


const UserAccount = () => {
    const [userLoggedIn, setUserLoggedIn] = useState(true)
  return (
    <div className='flex flex-row justify-end items-center'>
        <button className={`h-fit w-fit p-2 bg-[#fcccff] rounded-full font-semibold border-2 border-black ${userLoggedIn?"mx-3":''}`}>{userLoggedIn?"Log Out":"Login/Sign Up"}</button>
        {userLoggedIn?<img src={default_user} alt="User Icon" height={50} width={50} />:""}
    </div>
  )
}

export default UserAccount