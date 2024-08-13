import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {
   
   useNowPlayingMovies(); // calling that hook and now browse component much cleaner

  return (
    <div>
      <Header/>

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