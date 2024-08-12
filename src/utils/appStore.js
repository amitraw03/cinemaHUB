import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice" //override name

const appStore =configureStore({
    reducer:{ 
        user : userReducer,
    },
});

export default appStore;