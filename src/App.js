// Do not git add .gitignore or .env

import './App.css';
import { Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import { useState } from "react"
import VideosList from "./components/VideosList"
import Video from './components/Video';

/*
components
*/
import NavBar from './components/NavBar';
import About from './components/About.js';
import {TeamMembers} from './components/TeamMembersArray'


function App() {
console.log(TeamMembers)
  const [searchVideo, setSearchVideo] = useState('')
  const [teamMembers] = useState("")
  const [showMessage, setShowMessage] = useState(true);

  function handleSearchChange(event) {
      event.preventDefault()
      setShowMessage(false)

      let typed = event.target.searchVideo.value;
      if(typed === ''){
        console.log("error")
      } else {
        setSearchVideo(typed);
        typed = ''
      }
  }
 
  return (
  <>
    <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <SearchBar searchVideo={searchVideo} handleSearchChange={handleSearchChange} showMessage={showMessage}/>
                <VideosList searchVideo={searchVideo}/>
              </>
            }></Route>
            <Route path="/about" element={<About TeamMembers={TeamMembers}/>}></Route>
            <Route path="/video/:id" exact={true} element={<Video/>}></Route>
          </Routes>
      </>
  );
}

export default App;
