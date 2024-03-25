import React, { useEffect, useState } from 'react'
import MainPageTitle from '../components/MainPageTitle'
import MusicEntry from '../components/MusicEntry'
import { MusicImageSrc } from '../assets/Images'
import UserAccount from '../components/UserAccount'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

const HomePage = ({setMusic}) => {

  const [musics, setMusics] = useState([])

  
  const [libSearch, setLibSearch] = useState("")

  useEffect( () => {
    
    const getAllMusic=async()=>{
      const authToken= localStorage.getItem("authToken");
      const json= await fetch("http://localhost:3000/musicroutes/musicentries",{
            method:"GET",
            headers:{
                "auth-token":authToken
            }
        });

        const val=await json.json();

        setMusics(val)
        // console.log(musics)
    }

    if(localStorage.getItem("authToken")){
      getAllMusic()
    }
  
    
  }, [musics])
  
  
  

  return (
    <div>
      <UserAccount />
        <MainPageTitle setLibSearch={setLibSearch} libSearch={libSearch}/>

        <table className='table-fixed w-full my-6 border-collapse '>
          <thead className='mb-3 text-gray-500'>
          <tr className='table-row-padding'>
            <th className='text-left'>Name</th>
            <th className='text-right'>Upload Date</th>
          </tr>
          </thead>
            <tbody>
              {musics.filter((entry)=>(libSearch.toLowerCase()===""?entry:entry.musicTitle.toLowerCase().includes(libSearch))).map((entry)=>{
                return <tr className='border-t-2 table-row-padding' key={entry._id}>
                        <td className='py-3'><MusicEntry setMusic={setMusic} musicID={entry._id} musicName={entry.musicTitle} ImageSrc={MusicImageSrc} musicFile={entry.musicfile} noOfSaves={entry.noOfSaves}/></td>
                        <td className='py-3 text-right'>{moment(entry.dateOfUpload).format('YYYY-MM-DD')}</td>
                      </tr>
              })}
              {/* <tr className='border-t-2 table-row-padding'>
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
              </tr> */}
              
          </tbody>
        </table>
      
    </div>
  )
}

export default HomePage