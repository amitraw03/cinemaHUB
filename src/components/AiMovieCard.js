
import React from 'react'
import { IMG_CDN } from '../utils/constants';

const AiMovieCard = ({movie}) => {
    const{original_title , 
        overview , 
        poster_path , 
        release_date        
         } = movie;
      if(!poster_path) return null;
  return (
    <div className='flex w-[55%] mx-auto bg-black bg-opacity-85 rounded-3xl mb-4'>
           <img className='p-3 rounded-3xl ' src={IMG_CDN+poster_path} alt='suggested-movie' />
         <div className='pl-10'>
         <h2 className='mt-10 text-black bg-slate-300 inline-block rounded-lg p-1'><b>{original_title} </b></h2> <button className='text-white bg-cyan-800 px-2   py-1 rounded-lg ml-96 font-mono hover:bg-sky-600'>PLAY ▶</button>
         <p className='p-2'><em> ({release_date})</em></p>
         <h3 className=' mt-10 w-5/6 font-mono'>~ {overview}</h3>
         </div>

         
    </div>
  )
}

export default AiMovieCard;