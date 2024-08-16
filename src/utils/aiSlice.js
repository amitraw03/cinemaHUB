import { createSlice } from "@reduxjs/toolkit";

const aiSlice = createSlice({
    name:'ai',
    initialState:{
        showAiSearch:false,
        movieResults:null,
        movieNames:[],
    },
    reducers:{
        toggleAiSearch: (state)=>{
            state.showAiSearch= !state.showAiSearch;
        },
        addAiMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieResults = movieResults;
            state.movieNames = movieNames;
        },
    }
});

export const {toggleAiSearch , addAiMovieResult} = aiSlice.actions;

export default aiSlice.reducer;