import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
const URL = process.env.REACT_APP_API_KEY;

export default function VideosList({searchVideo}) {
    const [allVideos, setAllVideos] = useState([])
    
    console.log(searchVideo)
    console.log(allVideos)
    useEffect(() => {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideo}&kind=video&type=video&maxResults=10&key=${URL}
        `).then((response) => response.json())
        .then(data => {
            setAllVideos(data.items) 
        })
        .catch( (error) => {
            console.error(error)
        }
        )

      },[searchVideo])

  return (
    <div>
        <div> {allVideos && allVideos.map((video, i) => {
            //return <p key={i}>{video.snippet.title}</p>
            return <YouTube videoId={video.id.videoId}/>
        })}
        </div>
    </div>
  );
}
