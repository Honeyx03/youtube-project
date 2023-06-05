import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import "./VideoList.css";
import Video from "./Video";
const URL = process.env.REACT_APP_API_KEY;

export default function VideosList({searchVideo}) {
    const [allVideos, setAllVideos] = useState([])
    
    useEffect(() => {
        if (searchVideo === "") {
            console.log ("error")
        } else {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideo}&kind=video&type=video&maxResults=4&key=${URL}
        `).then((response) => response.json())
        .then(data => {
            setAllVideos(data.items) 
        })
        .catch( (error) => {
            console.error(error)
        }
        )
        }
      },[searchVideo])

  return (
    <div className="col-md-4 container">
        <div className="row">
            {allVideos.length < 1 ? null : allVideos.map((video, i) => {
                // return <p key={i}>{video.snippet.title}</p>
                return (
                <div className="col-sm-6 col-md-6 col-lg-6" key={video.id.videoId}>
                    <Link to={`/video/${video.id.videoId}`}>{video.snippet.title}</Link>
                    <Video video={video}></Video>
                </div>)
            })}
        </div>
    </div>
  );
}
