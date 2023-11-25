import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"
import Comments from "./Comments"
import LiveChat from "./LiveChat"
import { addVideoById } from "../utils/videoById"
import { GOOGLE_API_KEY } from "../utils/constants"
import VideoDetails from "./VideoDetails"
import VideoComment from "./VideoComment"
// import VideoComment from "./VideoComment"

const WatchPage = () => {
  const [searchParams]=useSearchParams()
  const id=searchParams.get("v")
  const dispatch =useDispatch()

  const getVideoById= async(id)=>{
    const data=await fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="+id+"&key="+ GOOGLE_API_KEY);
    const jsondata=await data.json();
    // console.log(jsondata.items[0]);
    dispatch(addVideoById(jsondata.items[0]))
  }

  useEffect(()=>{
    dispatch(closeMenu())
    getVideoById(id)
  },[])
  return (
    <div className="px-5 pt-5 w-full">
      <div className="flex  w-full">
        
     <div>
     <iframe width="1000" height="500" src={"https://www.youtube.com/embed/"+id +"?autoplay=1&mute=1"} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
     <VideoDetails/>

     </div>
     
      
      <LiveChat/>
      </div>
      {/* <Comments id={id}/> */}
      
      <VideoComment id={id}/>

    </div>
  )
}

export default WatchPage