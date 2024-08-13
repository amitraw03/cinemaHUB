//for a Separate redux slice to store and update movies---
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
           state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) =>{
            state.trailerVideo = action.payload;
         }
    },
});

export const {addNowPlayingMovies , addTrailerVideo} = moviesSlice.actions;

export default moviesSlice.reducer;