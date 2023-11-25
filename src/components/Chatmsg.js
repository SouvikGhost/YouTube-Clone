const Chatmsg = ({name,message}) => {
  return (
    <div className=" ml-4 flex items-center ">
    <img  className="h-6 mt-4 flex-shrink-0" src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="usericon" />
    <span className="pl-3 mt-3 font-semibold">{name}</span>
    <span className="pl-3 mt-3 text-sm">{message}</span>

    </div>
  )
}

export default Chatmsg