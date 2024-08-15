import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";


const useNowPlayingMovies = () =>{
    const dispatch = useDispatch(); 
    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  // fetching Now Playing Movie API form TMDB and put to the store
  const getNowPlayingMovies = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const response = await data.json();
    // console.log(response.results); 
    dispatch(addNowPlayingMovies(response.results)); //updating in store
  }

  useEffect(() =>{
    !nowPlayingMovies && getNowPlayingMovies();
  },[])

};

export default useNowPlayingMovies;