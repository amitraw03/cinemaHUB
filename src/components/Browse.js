import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import { useSelector } from 'react-redux';
import AiSearch from './AiSearch';



const Browse = () => {
  //now to toggle display of browse on basis of bool val of showAiSearch from redux store
    const showAiSearch = useSelector(store=>store.ai.showAiSearch);
   
   useNowPlayingMovies(); // calling that hook and now browse component much cleaner
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();

  return (
    <div >
      <Header/>
       {showAiSearch ? (<AiSearch/> )
       : ( <>
       <MainContainer/>
       <SecondaryContainer/>
          </>
       )}
      
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