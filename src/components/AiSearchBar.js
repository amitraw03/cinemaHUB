import { useDispatch, useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import React, { useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AI_API_KEY, API_OPTIONS } from "../utils/constants";
import { addAiMovieResult } from "../utils/aiSlice";

const AiSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);  // to dynamically change lang options
    const searchText = useRef(null); // to get non executing value of AI search bar

    const searchMovieTMDB = async (movie) => {
        //fetch data of aiMovies generated from our query from search section of TMDB API
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
        const response = await data.json();
        return response.results;
    };

    const handleAiSearchClick = async () => {
        const apiKey = AI_API_KEY;
        // console.log("APIKEY: ", apiKey);  

        if (!apiKey) {
            throw new Error('Missing GOOGLE_API_KEY environment variable');
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const aiQuery = `Act as a movies recommendation system and suggest some movies for the query ${searchText.current.value}. Give me the names of only the top ten movies, comma-separated, like the example ahead. Example: Gadar2, Fighter, etc.`;

        try {
            const result = await model.generateContent(aiQuery);
            const response = await result.response;
            const aiMovies = response.text().split(',');
            // console.log(aiMovies);  

            const promiseArray = aiMovies.map((movie) => searchMovieTMDB(movie.trim()));
            const tmdbResults = await Promise.all(promiseArray);  // after fetching the aigenerated movies from TMDB DB API
            console.log(tmdbResults);

            dispatch(addAiMovieResult({ movieNames: aiMovies, movieResults: tmdbResults })); // updating on store for later retreival
        } catch (error) {
            console.error('Error generating response:', error);
        }
    };

    return (
        <div >
            <form onSubmit={(e) => { e.preventDefault() }} className='flex w-7/12 p-1 m-6 rounded-lg bg-black  absolute z-50 mt-[8%] ml-[20%]'>
                <input ref={searchText} className=' w-full p-4 m-4'
                    type='text' placeholder={lang[langKey].aiSearchPlaceholder} />

                <button className='px-3 bg-red-600 h-14 mt-4 mr-2 rounded-full' onClick={handleAiSearchClick}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 22 21"
                        stroke-width="2"
                        stroke="white"
                        className="w-8 h-8"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112.65 3 7.5 7.5 0 0116.65 16.65l4.35 4.35z"
                        />
                    </svg>

                </button>

            </form>
        </div>
    )
}

export default AiSearchBar