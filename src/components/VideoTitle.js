
import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='w-full aspect-video pt-64 pl-10 absolute bg-gradient-to-r from-black'>
            <h1 className='font-extrabold text-5xl text-slate-100'>{title}</h1>
            <p className='w-2/5 pt-4 text-sky-50'>{overview}</p>
            <div className='pt-8 flex h-16'>
                <button className="flex items-center gap-2  py-1 px-3 bg-slate-300  text-black font-medium rounded-md  hover:bg-opacity-75">
                    <img className="w-4" src="https://cdn-icons-png.flaticon.com/128/27/27223.png" alt="Play icon" />
                    Play
                </button>

                <button className='ml-10 flex items-center gap-2  py-1 px-3 bg-slate-300 bg-opacity-75  text-black  font-medium rounded-md'>
                    <img className='w-4' src='https://cdn-icons-png.flaticon.com/128/157/157933.png'/>
                    More Info
                </button>
            </div>
           


        </div>
    )
}

export default VideoTitle