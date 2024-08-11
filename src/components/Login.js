import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div >
            <Header />
            <img 
             src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg' 
              alt='bg-img'
              className='absolute  w-full brightness-50'
            />
             <div className=' flex items-center justify-center min-h-screen relative z-10'>
                <form className='bg-black w-[450px] h-auto bg-opacity-70 p-8 rounded-md shadow-lg'>
                    <h1 className='text-white font-bold text-3xl ml-5 my-4'>Sign In</h1>
                    <input 
                        type='text' 
                        placeholder='Email or mobile number' 
                        className='w-10/12 ml-6 my-4 py-4 px-5 mb-4 rounded-md border border-gray-300' 
                    />
                    <input 
                        type='password' 
                        placeholder='Password' 
                        className='w-10/12 ml-6 my-4 py-4 px-5 mb-4 rounded-md border border-gray-300' 
                    />
                    <button 
                        type='submit' 
                        className=' w-10/12 ml-6 my-5 py-2 px-10 bg-red-600 text-white rounded-md mb-4'
                    >
                        Sign In
                    </button>
                    <div className='flex items-center mb-4 ml-6'>
                        <input 
                            type="checkbox" 
                            id="myCheckbox" 
                            name="myCheckbox" 
                            className='mr-2'
                        />
                        <label htmlFor="myCheckbox" className='text-white'>Remember me</label>
                    </div>
                    <h2 className='text-white text-center'>
                        New to Netflix? <b>sign up now.</b>
                    </h2>
                </form>
            </div>
        </div>
    )
}

export default Login