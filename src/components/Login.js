import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();  //for navigating to another web page

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrorMessage] = useState(null);

    const signUpHandler = () => {
        setIsSignInForm(!isSignInForm); //for toggling UI of sihnIN/UP form
    }

    //FORM VALIDATION:--
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const formValidator = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        //once form validate** -- sign In/ sign Up
        if (message !== null) return; // Exit if validation fails

        if (!isSignInForm) {
            //Sign Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // console.log(errorCode+"-"+errorMessage); 
                });
        }
        else {
            //Sign In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });


        }

    }

    return (
        <div >
            <Header />
            <img
                src='https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg'
                alt='bg-img'
                className='absolute  w-full brightness-50'
            />
            <div className=' flex items-center justify-center min-h-screen relative z-10'>
                <form onSubmit={(e) => { e.preventDefault() }} className='bg-black w-[400px] h-auto bg-opacity-75 p-8 rounded-md shadow-lg'>
                    <h1 className='text-white font-bold text-3xl ml-5 my-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

                    {!isSignInForm && (<input
                        ref={name}
                        type='text'
                        placeholder='Full Name'
                        className='w-11/12 ml-4 my-4 py-4 px-5 mb-4 rounded-md bg-black bg-opacity-10   border-[1px] text-white'
                    />)}
                    <input
                        ref={email}
                        type='text'
                        placeholder='Email or mobile number'
                        className='w-11/12 ml-4 my-4 py-4 px-5 mb-4 rounded-md bg-black bg-opacity-10   border-[1px] text-white'
                    />
                    <input
                        ref={password}
                        type='password'
                        placeholder='Password'
                        className='w-11/12 ml-4 my-4 py-4 px-5 mb-4 rounded-md md bg-black bg-opacity-10 border-[1px] text-white'
                    />

                    <p className='ml-4 font-bold text-red-800'>{errMessage}</p>
                    <button
                        type='submit'
                        className=' w-11/12 ml-4 my-5 py-2 px-10 bg-red-600 text-white rounded-md mb-4'
                        onClick={formValidator}
                    >
                        {isSignInForm ? "Sign In" : "Sign Up"}
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

                    <h2 className='text-white text-center cursor-pointer' onClick={signUpHandler}>
                        {isSignInForm ? "New to Netflix? " : "Already have an account? "}
                        <b className='hover:underline'>
                            {isSignInForm ? "Sign up now." : "Sign in now."}
                        </b>
                    </h2>
                </form>
            </div>

        </div>
    )
}

export default Login