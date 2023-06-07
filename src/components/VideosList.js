import { useEffect,useState } from "react";
import YouTube from 'react-youtube';
import "./VideoList.css";
import Modal from "./Modal";
const URL = process.env.REACT_APP_API_KEY;

export default function VideosList({searchVideo}) {
    const [allVideos, setAllVideos] = useState([])
    const [modal, setModal] = useState(false)
    
   function handleModal () {
    setModal(!modal)
    console.log("hi.")
   }

    useEffect(() => {
        if (searchVideo === "") {
            console.log ("error")
        } else {
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchVideo}&kind=video&type=video&maxResults=4&key=${URL}
        `).then((response) => response.json())
        .then(data => {
            setAllVideos(data.items) 
            console.log("hello.")
        })
        .catch( (error) => {
            console.log("There's an error.")
         }
        )
       }
      },[searchVideo])

      const [modalButton, setModalButton] = useState("shown")

      function handleModalButton() {
         if(modalButton === "shown"){
             setModalButton("hidden")
             console.log("also worked.")
         } else {
             setModalButton("shown")
         }
      }
       
      useEffect(() => {
        if (allVideos.length < 1) {
            setModalButton("shown")
        }
      },[allVideos])
      

  return (
    <div className="col-md-10 container">
        <div className="row">
            {allVideos.length < 1 ? <Modal handleModalButton={handleModalButton} modalButton={modalButton}/> : allVideos.map((video, i) => {
                return (<div className="col-sm-6 col-md-6 col-lg-6" key={video.id.videoId}>
                    <YouTube videoId={video.id.videoId} opts={{ width: "100%", height: "auto" }}/> </div>)
            })}
        
        </div>
    </div>
  );
}
