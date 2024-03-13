import React from 'react'
import { default_user } from '../assets/Images'

const UserAccountModal = ({closeUserModal}) => {
  return (
    <div className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-1/2 bg-white rounded-md drop-shadow-2xl'>
        <div className='p-3'>
            edit your profile
        </div>
            <hr />
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col items-center p-4 gap-3'>
                <img src={default_user} alt="profile picture" width={150} height={150}/>
                <div className='flex gap-2'>
                    <button className='py-1 px-2 rounded-lg  bg-blue-600'>upload photo</button>
                    <button className='py-1 px-2 rounded-lg border-2 border-gray-300 bg-white'>remove photo</button>
                </div>
            </div>
            <div className='flex justify-evenly'>
                <div>
                    Name: Name
                </div>
                <div>
                    UserName: UserName
                </div>
            </div>
            <hr className='w-[90%] mx-auto'/>
            <div className='flex flex-col p-3'>
                <h1 className='font-bold'>Delete your account?</h1>
                <p className='text-red-500'>WARNING: THIS ACTION CANNOT BE UNDONE</p>
                <button className='size-fit border-2 border-red-600 bg-red-50 text-red-600 font-bold rounded-lg py-1 px-3 text-sm'>Delete Your Account</button>
            </div>
            <div className='flex gap-5 justify-evenly p-3'>
                <button className='text-white font-bold bg-blue-600 text-sm py-1 px-3 rounded-lg size-full'>Save Changes</button>
                <button className='font-bold text-sm py-1 px-3 border-2 border-gray-300 rounded-lg size-full' onClick={closeUserModal}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default UserAccountModal