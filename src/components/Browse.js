import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
   
   useNowPlayingMovies(); // calling that hook and now browse component much cleaner

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/*  
         Main Container
          - VideoBackground
          - VideoTitle
         Secondary Container
          - MoviesList *n
          - cards *n
      */}
    </div>
  )
}

export default Browse