import { useState } from "react"
import VideosList from "./VideosList"

export default function SearchBar() {
    const [searchVideo, setSearchVideo] = useState('')

    function handleSearchChange(event) {
        event.preventDefault()
        const typed = event.target.searchVideo.value;
        console.log(typed)
        setSearchVideo(typed);
    }

  return (
    <div>
        <div className="input-group mb-3">
            <form onSubmit={handleSearchChange}>
                <label htmlFor="searchVideo">
                <input type="text" id="searchVideo"/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            {/* <VideosList searchVideo={searchVideo}/> */}
        </div>
    </div>
  );
}
