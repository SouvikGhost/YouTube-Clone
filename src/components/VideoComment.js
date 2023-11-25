import { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import { OneComent } from "./Comments";

const VideoComment = ({id}) => {
  const [comments,setComments]=useState([])
    const getCommentsById=async ()=>{
        const data=await fetch("https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId="+id+"&key="+GOOGLE_API_KEY)
        const jsonData=await data.json();
        setComments(jsonData.items)
    }
    useEffect(()=>{
        getCommentsById()
    },[])
  return (
    <div>
      <h1 className="text-xl font-bold py-5 ">Comments:---</h1>
      <div>
      
      {comments.map((comment)=> <OneComent key={comment.id} data={comment}/>)}
      </div>
      
    </div>
  )
}

export default VideoComment