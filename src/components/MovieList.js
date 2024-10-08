import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title , movies}) => {
    // console.log(movies);    
  return (
    <div className=' py-2'>
          <h1 className="text-3xl font-bold  pt-4 pl-6 font-serif text-white">{title}</h1>
      <div className="overflow-x-auto w-full scrollbar-hide">
      <div className="flex px-4 space-x-1 py-3">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div> 
      </div>   
    </div>
  )
}

export default MovieList