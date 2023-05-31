// Do not git add .gitignore or .env
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchBar from './components/SearchBar';
import { useState } from "react"
import VideosList from "./components/VideosList"

function App() {
  const [searchVideo, setSearchVideo] = useState('')

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
    <div className="App">
      <SearchBar searchVideo={searchVideo} handleSearchChange={handleSearchChange} />
      <VideosList searchVideo={searchVideo}/>

    </div>
  );
}

export default App;
