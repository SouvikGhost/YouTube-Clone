import { useSelector } from "react-redux"

const VideoDetails = () => {
  const videoData=useSelector(store=>store.videoById.videoById)
  const {snippet}=videoData;
  if(!snippet) return null;
  const {title,description,channelTitle}=snippet
  // console.log(snippet);
  return (
    <div>
      <h1 className="font-bold pt-2 text-2xl py-3">{title}</h1>
      <div className=" flex justify-between">
        <div>
        <img  className="h-6 mb-3 inline-block" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="usericon" />
       <span className="pl-3 text-lg font-bold">{channelTitle}</span>
        </div>
      
       <button className="bg-red-600 mb-3 cursor-pointer text-white p-2 rounded-xl">Subscribe</button>
      </div>
      <div className="border border-black rounded-lg p-2">
        
        <span>{description.slice(0,300)}...</span>
      </div>
    </div>
  )
}

export default VideoDetails