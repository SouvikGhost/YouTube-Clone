import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../utils/appSlice";

const appStore = configureStore({
    reducer:{

        app:appSlice
    }
})
export default appStore;