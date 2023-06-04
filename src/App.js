// Do not git add .gitignore or .env

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import { useState } from "react"
import VideosList from "./components/VideosList"

/*
components
*/
import NavBar from './components/NavBar';
import Home from './components/Home/Home.js';
import About from './components/About.js';

function App() {

  const [searchVideo, setSearchVideo] = useState('')
  const [teamMembers] = useState("")

  function handleSearchChange(event) {
      event.preventDefault()
      let typed = event.target.searchVideo.value;
      if(typed === ''){
        console.log("error")
      } else {
        setSearchVideo(typed);
      }

  }
 
  return (
  <>
    <NavBar />
      {/* <SearchBar searchVideo={searchVideo} handleSearchChange={handleSearchChange} />
        <Router>
          <Routes>
            <Route path="/" element={<VideosList searchVideo={searchVideo}/>}></Route>
            <Route path="/about" element={<About teamMembers={teamMembers}/>}></Route>
          </Routes>
        </Router> */}
      </>
  );
}

export default App;
