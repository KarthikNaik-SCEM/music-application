import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import UserAccount from "./components/UserAccount";
import HomePage from "./pages/HomePage";
import SearchMusicPage from "./pages/SearchMusicPage";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS


export default function App() {

  // const uAuth=localStorage.getItem("authToken");
  // let musicFile;
  // musicFile=localStorage.getItem("musicFile")
  const [musicFile, setMusic] = useState("")
  
  const nav=useNavigate()
  useEffect(() => {
    const userAuth=localStorage.getItem("authToken")

    if(!userAuth){
      nav("/login")
    }
    
    
  }, [])

  

  const loc=useLocation();
  
  return (
    <main className="flex">
      {loc.pathname!=="/login"?<SideBar />:" "}
      <div className="px-16 py-8  w-full">
        
        
        <Routes>
          <Route exact path="/" element={<HomePage setMusic={setMusic}/>}></Route>
          <Route exact path="/searchmusic" element={<SearchMusicPage setMusic={setMusic}/>}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
        

      </div>
      {
        loc.pathname!=="/login"&&musicFile?
      <AudioPlayer
      autoPlay
      src={musicFile}
      
      // onPlay={e => console.log("onPlay")}
      className='fixed bottom-0'
      // other props here

      />:""}
    </main>
  )
}