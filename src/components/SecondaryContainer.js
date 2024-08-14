import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector(store => store.movies);

  return (
    <div  className='bg-black'>
          <div className='-mt-72 relative z-20 pl-4'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />   
          <MovieList title={"Top-Rated"} movies={movies.nowPlayingMovies} />   
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />   
          <MovieList title={"Upcoming"} movies={movies.nowPlayingMovies} />   
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />   
          </div>
          {/* 
             Movies List ~ Now Playing
                - cards
             Movies List ~ Top rated
             Movies List ~ Trending
             Movie List ~ Horror   
          */}
    </div>
  )
}

export default SecondaryContainer