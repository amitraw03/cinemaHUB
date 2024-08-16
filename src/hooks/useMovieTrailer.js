import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";


const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();  // to upload trailers on store

    // this step is the memoisation of data--- which eventually prevent us or our users to call the API again n again if data already present in redux store
    const trailerVideo = useSelector(store => store.movies.trailerVideo);  

    //fetch movie trailer from TMDB API using movieId
    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'  //API found in video section of Movie
                                  +movieId+'/videos?language=en-US', API_OPTIONS);
        const response = await data.json();
        // console.log(response);

        const trailerArr = response.results.filter((video) => video.type === "Trailer");
        const trailer = trailerArr[0];
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
       !trailerVideo && getMovieTrailer();
    }, [])



}

export default useMovieTrailer;