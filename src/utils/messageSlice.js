import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const messageSlice=createSlice({
    name:"message",
    initialState:{
        liveMessage:[]
    },
    reducers:{
        addLiveMessage: (state,action)=>{
            // state.liveMessage.splice(LIVE_CHAT_COUNT,1)
            state.liveMessage.push(action.payload);
            if(state.liveMessage.length===20){
                state.liveMessage.shift()
            }
        }
    }
})
export const { addLiveMessage }=messageSlice.actions;
export default messageSlice.reducer;