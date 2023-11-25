import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/appSlice";
import searchReducer from "../utils/searchSlice";
import messageSlice from "./messageSlice"
import videoByIdSlice from "./videoById"


const appStore = configureStore({
    reducer:{

        app:appSlice,
        search:searchReducer,
        message:messageSlice,
        videoById:videoByIdSlice
        
    }
})
export default appStore;