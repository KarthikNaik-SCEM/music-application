import React from 'react'
import MainPageTitle from '../components/MainPageTitle'
import MusicEntry from '../components/MusicEntry'
import { MusicImageSrc } from '../assets/Images'

const HomePage = () => {
  return (
    <div>
        <MainPageTitle />

        <table className='table-fixed w-full my-6 border-collapse '>
          <thead className='mb-3 text-gray-500'>
          <tr className='table-row-padding'>
            <th className='text-left'>Name</th>
            <th className='text-right'>Upload Date</th>
          </tr>
          </thead>
            <tbody>
              <tr className='border-t-2 table-row-padding'>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              <tr className='table-row-padding border-t-2'>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              <tr className='table-row-padding border-t-2 '>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              
          </tbody>
        </table>
      
    </div>
  )
}

export default HomePage