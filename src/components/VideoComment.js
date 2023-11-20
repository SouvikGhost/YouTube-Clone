import { useEffect } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";

const VideoComment = ({id}) => {
    const getCommentsById=async ()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+id+"&key="+GOOGLE_API_KEY)
        const jsonData=await data.json();
        console.log(jsonData.items);
    }
    useEffect(()=>{
        getCommentsById()
    },[])
  return (
    <div>VideoComment</div>
  )
}

export default VideoComment