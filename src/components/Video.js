import YouTube from 'react-youtube';
import { useParams, useNavigate } from "react-router-dom";

export default function Video({video}) {
    const { id } = useParams();
    let navigate = useNavigate();

    function test(id){
        navigate(`/video/${id}`)
    }

  return (
    <>
        <YouTube videoId={id ?? video.id.videoId} onStateChange={()=>test(video.id.videoId)} opts={{ width: "100%", height: "auto" }}/> 
    </>
  );
}