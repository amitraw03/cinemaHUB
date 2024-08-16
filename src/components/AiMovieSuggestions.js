import React from 'react'
import { useSelector } from 'react-redux';

const AiMovieSuggestions = () => {
  const { movieNames , movieResults } = useSelector((store) => store.ai);  //extracting data from aiSlice (appStore)

   if (!movieNames) return null;
  return (
    <div className='relative z-50 top-60 text-white bg-black '>  
       {movieNames} 
    </div>
  )
}  

export default AiMovieSuggestions;