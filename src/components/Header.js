import { useDispatch, useSelector } from "react-redux"
import { toggleMenu } from "../utils/appSlice"
import { useEffect, useState } from "react"
import { YOUTUBE_SEARCH_API_KEY } from "../utils/constants"
import { FaSearch } from "react-icons/fa";
import { cacheResult } from "../utils/searchSlice";


const Header = () => {
   const [search , setSearch]=useState("")
   const [result,setResults]=useState([])
   const [showSuggestion,setShowSuggestion]=useState(false)
   const searchCache=useSelector(store=>store.search)
   // console.log(search);


   const getResultsFromInput= async()=>{
      const data = await fetch(YOUTUBE_SEARCH_API_KEY+search);
      const josnData=await data.json();
      // console.log("API called :---" +josnData);
      setResults(josnData[1])
      dispatch(cacheResult({
         [search]:josnData[1],
      }))
   }


   useEffect(()=>{
      const timer =setTimeout(()=>{
         if(searchCache[search]){
            setResults(searchCache[search])
            
         }
         else{

            getResultsFromInput()
         }

      },200) 
      return ()=>{
         clearTimeout(timer)
      }
   },[search])


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
      <div>

      
        <input value={search} onFocus={()=>setShowSuggestion(true)} onBlur={()=>setShowSuggestion(false)} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search" className="w-1/2 border border-gray-800 p-2  rounded-l-full"/>
        <button className="p-3 bg-gray-500 rounded-r-full font-medium text-white relative top-[3px]"><FaSearch className="text-black text-lg "/></button>
        </div>
        {showSuggestion && <div className=" bg-white font-medium absolute w-[34rem] mx-auto left-[9rem] right-0 rounded-lg px-5 py-2">
        <ul>
         {result.map(r=><li key={r} className="text-left py-2 ml-5 hover:bg-gray-200"><FaSearch className="text-black absolute left-3"/>{r}</li>)}
        
        </ul>
        </div>}

       
     </div>
     <div className="col-span-1">
        <img  className="h-7 mt-4" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="usericon" />
        </div>
    </div>
  )
}

export default Header
