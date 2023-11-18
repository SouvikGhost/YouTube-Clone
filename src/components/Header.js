import { useDispatch } from "react-redux"
import { toggleMenu } from "../utils/appSlice"

const Header = () => {
   const dispatch = useDispatch()
   const toggleMenuHandle=()=>{
      dispatch(toggleMenu())
   }
  return (
    <div className="grid grid-flow-col shadow-lg">
     
     <div className="flex p-2 m-2 col-span-1">
        <img onClick={toggleMenuHandle} className="h-8 cursor-pointer" src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menuicon" />
        <img className="h-7 ml-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png" alt="youtubelogo" />

     </div>
     <div className="col-span-10 text-center mt-3">
        <input type="text" placeholder="Search" className="w-1/2 border border-gray-800 p-2 rounded-l-full"/>
        <button className="p-2 bg-gray-500 rounded-r-full font-medium text-white">Search</button>
     </div>
     <div className="col-span-1">
        <img  className="h-7 mt-4" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="usericon" />
        </div>
    </div>
  )
}

export default Header
