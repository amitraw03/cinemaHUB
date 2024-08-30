import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const dispatch = useDispatch();

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errMessage, setErrorMessage] = useState(null);

    const signUpHandler = () => {
        setIsSignInForm(!isSignInForm); //for toggling UI of signIN/UP form
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
                    updateProfile(user, {   //to update profile info acc to submit name and photo -- firebase API
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,              
                      })
                      .then(() => {
                        const {uid, email , displayName ,photoURL} = auth.currentUser;
                        dispatch(addUser({uid: uid ,email:email, displayName:displayName ,photoURL:photoURL})); 
                        // Profile updated!-- of User in appStore
                        // console.log(user);
                      })
                      .catch((error) => {
                         setErrorMessage(error.message);
                      });

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
                src={BG_URL}
                alt='bg-img'
                className='absolute  w-full brightness-50'
            />
            <div className=' flex items-center justify-center min-h-screen absolute z-10 left-[550px]'>
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