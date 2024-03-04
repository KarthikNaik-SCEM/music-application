import React from 'react'

const MusicEntry = ({musicName,ImageSrc}) => {
  return (
    <div className='flex items-center gap-3'>
        <img src={ImageSrc} alt="Music_Image" className='h-16 w-16 rounded-lg'/>
        <p className='font-semibold max-w-52'>
            {musicName}
        </p>
    </div>
  )
}

export default MusicEntry