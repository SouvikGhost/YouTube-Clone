import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { closeMenu } from "../utils/appSlice"
import { useSearchParams } from "react-router-dom"

const WatchPage = () => {
  const [searchParams]=useSearchParams()
  const id=searchParams.get("v")
  console.log(id);
  const dispatch =useDispatch()
  useEffect(()=>{
    dispatch(closeMenu())
  },[])
  return (
    <div className="px-5 pt-5">
      <iframe width="1100" height="550" src={"https://www.youtube.com/embed/"+id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage