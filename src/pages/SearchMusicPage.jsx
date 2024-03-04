import React from 'react'
import MusicEntry from '../components/MusicEntry'
import { MusicImageSrc } from '../assets/Images'

const SearchMusicPage = () => {
  return (
    <div>
        <div className='my-2'>
            <p className='text-3xl font-semibold px-2'>
                Search For Music
            </p>
            <div className='my-3'>
                <input type="text" className='rounded-full border-2 border-black outline-none px-3 py-2 text-sm w-1/3' placeholder='Search Music'/>
            </div>
        </div>

        <table className='table-fixed w-full my-6 border-collapse '>
          <thead className='mb-3 text-gray-500'>
          <tr className='table-row-padding'>
            <th className='text-left w-[75%]'>Name</th>
            <th className='text-center'>Saves</th>
            <th className='text-right'>Upload Date</th>
          </tr>
          </thead>
            <tbody>
              <tr className='border-t-2 table-row-padding'>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-center'>2</td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              <tr className='border-t-2 table-row-padding'>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-center'>2</td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              <tr className='border-t-2 table-row-padding'>
                <td className='py-3'><MusicEntry musicName="The Sliding Mr. Bones (Next Stop, Pottersville)" ImageSrc={MusicImageSrc}/></td>
                <td className='py-3 text-center'>2</td>
                <td className='py-3 text-right'>1961</td>
              </tr>
              
          </tbody>
        </table>


    </div>

  )
}

export default SearchMusicPage