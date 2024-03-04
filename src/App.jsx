import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import UserAccount from "./components/UserAccount";
import HomePage from "./pages/HomePage";
import SearchMusicPage from "./pages/SearchMusicPage";

export default function App() {
  return (
    <main className="flex">
      <SideBar />
      <div className="px-16 py-8  w-full">
        <UserAccount />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/searchmusic" element={<SearchMusicPage />}></Route>
        </Routes>
        

      </div>
    </main>
  )
}