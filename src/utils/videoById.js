import { createSlice } from "@reduxjs/toolkit";

const videoById=createSlice({
    name:"videoById",
    initialState:{
        videoById:{}
    },
    reducers:{
        addVideoById:(state,action)=>{
            state.videoById=action.payload;
        }
    }
})
export const {addVideoById}=videoById.actions;
export default videoById.reducer;