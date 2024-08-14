import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className="flex-shrink-0 w-48 px-2 ">
        <img  className='rounded-lg'
        alt='movie-card' src={IMG_CDN+ posterPath} />
    </div>
  )
}

export default MovieCard