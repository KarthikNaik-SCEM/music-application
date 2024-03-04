import React from 'react'

const MainPageTitle = () => {
  return (
    <div className='flex justify-between items-center my-2'>
        <p className='text-3xl font-semibold px-2'>
            My Music
        </p>
        <div className='flex gap-3'>
            <input type="text" className='rounded-full border-2 border-black outline-none p-2 text-sm' placeholder='Search Library'/>
            <button className={`h-fit w-fit py-2 px-4 bg-[#fcccff] rounded-full font-semibold`}>+ upload music</button>
        </div>
    </div>
  )
}

export default MainPageTitle