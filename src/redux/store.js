import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

//Create & Configure Store
const store = configureStore({
    reducer:{
        appSlice:appReducer
    }
});
export default store;
