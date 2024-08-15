
import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(store => store.movies.popularMovies);

    const getPopularMovies = async() =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const response = await data.json();
        // console.log(response.results);
        dispatch(addPopularMovies(response.results));
    }

    useEffect(() =>{
       !popularMovies && getPopularMovies();
    },[])
     
}

export default usePopularMovies;