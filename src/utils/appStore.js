import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice" //override name
import moviesReducer from "./moviesSlice"
import aiReducer from "./aiSlice"
import configReducer from "./configSlice"

const appStore =configureStore({
    reducer:{ 
        user : userReducer,
        movies: moviesReducer,
        ai: aiReducer,
        config: configReducer,
    },
});

export default appStore;