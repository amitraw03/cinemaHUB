import React from 'react'
import AiMovieSuggestions from './AiMovieSuggestions';
import { BG_URL } from '../utils/constants';
import AiSearchBar from './AiSearchBar';

const AiSearch = () => {
//    const handleClick=(e)=>{
//     e.stopPropagation();
//    };
//    const handleFormClick=(e)=>{
//     e.stopPropagation();
//    };

    return (
        <div >
            <img
                src={BG_URL}
                alt='bg-img'
                className='absolute w-full brightness-75 z-30 '
            />
        <AiSearchBar/>
        <AiMovieSuggestions/>
        </div>
    )
}

export default AiSearch;




