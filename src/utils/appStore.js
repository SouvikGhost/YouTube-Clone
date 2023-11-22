import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/appSlice";
import searchReducer from "../utils/searchSlice"


const appStore = configureStore({
    reducer:{

        app:appSlice,
        search:searchReducer
    }
})
export default appStore;