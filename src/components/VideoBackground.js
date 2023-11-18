import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API_KEY } from "../utils/constants"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"

const VideoBackground = () => {
  const [videos,setVideos]=useState([])
  useEffect(()=>{
    getVideos()
  },[])
  const getVideos =async()=>{
    const data = await fetch(YOUTUBE_VIDEO_API_KEY);
    const jsonData = await data.json();
    setVideos(jsonData.items)
  }
  return (
    <div className="ml-8 flex justify-between flex-wrap">
    

      {videos.map((video)=> <Link to={"watch?v="+video.id}> <VideoCard key={video.id} info={video}/>  </Link>)}
     

    </div>
  )
}

export default VideoBackground