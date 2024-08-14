import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies= useSelector(store => store.movies);  // just extracting name- movies we'll be able to access all variation movies

  return (
    <div  className='bg-black'>
          <div className='-mt-72 relative z-20 pl-4'>
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />   
          <MovieList title={"Top-Rated"} movies={movies.topRatedMovies} />   
          <MovieList title={"Popular"} movies={movies.popularMovies} />   
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />   
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