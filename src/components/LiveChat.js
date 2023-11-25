import { useEffect, useState } from "react";
import Chatmsg from "./Chatmsg";
import { generate, makeMessage } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessage } from "../utils/messageSlice";
import { IoSendSharp } from "react-icons/io5";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const messageData = useSelector((store) => store.message.liveMessage);

    useEffect(() => {
      const timer = setInterval(() => {
        const randomName = generate(20);
        const randomMessage = makeMessage(20);
        dispatch(addLiveMessage({
          name:randomName,
          message:randomMessage
        }))

        // console.log("Api Polling" + randomName + randomMessage);
      }, 1500);
      return () => clearInterval(timer);
    }, []);
  return (
    <div className="">
        <h1 className="font-semibold text-lg text-center mt-2  border-b-[1px] border-black border-dashed">
          Live Chat
        </h1>
      <div className="border border-black w-[480px] ml-4 rounded-lg overflow-y-scroll h-[500px] flex flex-col-reverse">
        <div className="">
          {messageData.map((msg, index) => (
            <Chatmsg key={index} name={msg.name} message={msg.message} />
          ))}
        </div>
      </div>
      <div className="  ml-9 relative bottom-14">
        <div className="h-1/4 mt-14">
          <form
            onSubmit={(e) => {
              e.preventDefault();

              dispatch(addLiveMessage({
                name:"Souvik Ghosh",
                message:liveMessage
              }))
              setLiveMessage("")
            }}
            className="pt-4"
          >
            <input
              className="w-96 h-8  ml-2 outline-none  border-black border-b-[1px] placeholder:pl-2 pl-2 text-base "
              type="text"
              placeholder="type something.."
              onChange={(e) => setLiveMessage(e.target.value)}
              value={liveMessage}
            />
            <button className="  px-2 py-2 rounded-lg ml-2 cursor-pointer text-xl ">
              <IoSendSharp />{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
