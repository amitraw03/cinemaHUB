
import React from 'react'
import {useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);  // fetching trailer vds from store 
   
    useMovieTrailer(movieId);

    return (
        <div >
            <iframe 
                className='w-full aspect-video '
                src={"https://www.youtube.com/embed/"+trailerVideo?.key+
                    "?&autoplay=1&mute=1"
                }  //here we attached trailer key dyamically using redux power & we can also this work using state var in useState way
                title="YouTube video player"
                allow="accelerometer; 
                autoplay;
                picture-in-picture;
                web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground