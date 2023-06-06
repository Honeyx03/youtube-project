import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";

export default function Video() {
    const { id } = useParams();

    return (
    <>
        <YouTube videoId={id} opts={{ width: "100%", height: "auto" }}/> 
    </>
    );
}