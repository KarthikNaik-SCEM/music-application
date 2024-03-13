import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./components/SideBar";
import UserAccount from "./components/UserAccount";
import HomePage from "./pages/HomePage";
import SearchMusicPage from "./pages/SearchMusicPage";
import LoginPage from "./pages/LoginPage";
import { useEffect } from "react";

export default function App() {

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
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/searchmusic" element={<SearchMusicPage />}></Route>
          <Route exact path="/login" element={<LoginPage />}></Route>
        </Routes>
        

      </div>
    </main>
  )
}