import React from 'react'
import AiMovieSuggestions from './AiMovieSuggestions';
import { BG_URL } from '../utils/constants';
import AiSearchBar from './AiSearchBar';

const AiSearch = () => {

    return (
        <div className="relative min-h-screen">
            <div className="fixed top-0 left-0 w-full h-screen bg-cover bg-center -z-10"
                style={{ backgroundImage: `url(${BG_URL})` }}>
            </div>
            <div className="content-container">
                <AiSearchBar />
                <AiMovieSuggestions />
            </div>
        </div>
    )
}

export default AiSearch;




