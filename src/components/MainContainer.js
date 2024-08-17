import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    //    use of store data to display title and video 
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return; // so initially when no movie in store no return just early exit

    const mainMovie = movies[1];
    console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer