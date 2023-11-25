import { useSelector } from "react-redux"

const Sidebar = () => {
  const toggleMenu=useSelector(store=>store.app.isMenuOpen);
  if(!toggleMenu) return null;
  return (
    <div className="shadow-md p-5 bg-slate-600 h-[700px]  ">
      <ul className="font-semibold">
        <li className="text-center py-1">Home</li>
        <li className="text-center py-1">Shorts</li>
        <li className="text-center py-1">Videos</li>
        <li className="text-center py-1">Live</li>
      </ul>
      <h1 className="font-bold text-base py-3">Subscription</h1>
      <ul className="font-semibold">
        <li className="text-center py-1">Music</li>
        <li className="text-center py-1">Sports</li>
        <li className="text-center py-1">Gaming</li>
        <li className="text-center py-1">Movies</li>
      </ul>
      <h1 className="font-bold text-base py-3">Subscription</h1>
      <ul className="font-semibold">
      <li className="text-center py-1">Music</li>
        <li className="text-center py-1">Sports</li>
        <li className="text-center py-1">Gaming</li>
        <li className="text-center py-1">Movies</li>
      </ul>
      <h1 className="font-bold text-base py-3">Subscription</h1>
      <ul className="font-semibold">
      <li className="text-center py-1">Music</li>
        <li className="text-center py-1">Sports</li>
        <li className="text-center py-1">Gaming</li>
        <li className="text-center py-1">Movies</li>
      </ul>
    </div>
  )
}

export default Sidebar