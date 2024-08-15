import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
import React from 'react'

const AiSearchBar = () => {
   const langKey = useSelector(store=>store.config.lang);

  return (
    <div >
    <form  onSubmit={(e)=>{e.preventDefault()}}  className='flex w-7/12 p-1 m-6 rounded-lg bg-black  absolute z-50 mt-[8%] ml-[20%]'>
        <input className=' w-full p-4 m-4'
            type='text' placeholder={lang[langKey].aiSearchPlaceholder} />

        <button className='px-3 bg-red-600 h-14 mt-4 mr-2 rounded-full'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 22 21"
                stroke-width="2"
                stroke="white"
                className="w-8 h-8"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1112.65 3 7.5 7.5 0 0116.65 16.65l4.35 4.35z"
                />
            </svg>

        </button>

    </form>
</div>
  )
}

export default AiSearchBar