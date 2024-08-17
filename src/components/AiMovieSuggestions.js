import React from 'react'
import { useSelector } from 'react-redux';
import AiMovieCard from './AiMovieCard';

const AiMovieSuggestions = () => {
  const { movieNames , movieResults } = useSelector((store) => store.ai);  //extracting data from aiSlice (appStore)

  //  if (!movieNames ) return null;
  return (
    <div className='absolute z-50 top-60 text-white'>  
    {movieNames.map((movie, index) => {
      const categoryFirst = movieResults[index]?.[0];  // Ensure movieResults[index] exists and has elements

      // Return null if there's no valid movie result
      if (!categoryFirst) return null;

      return <AiMovieCard key={categoryFirst.id} movie={categoryFirst} />;
    })}
  </div>
  )
}  

export default AiMovieSuggestions;