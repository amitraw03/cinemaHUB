//for a Separate redux slice to store and update movies---
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:'movies',
    initialState: {
        nowPlayingMovies:null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
           state.nowPlayingMovies = action.payload;
        },
    },
});

export const {addNowPlayingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;