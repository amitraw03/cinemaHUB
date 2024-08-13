import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";  //firebase APi for signOut auth
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const dispatch = useDispatch();  //to update the redux store
    const navigate = useNavigate();  //for navigating to another web page

    //useSelector from strore to display name and profile pic of updated user
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => { // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }

    //using useEffect to execute this(currUser SignIn) just once
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {   //this is a fireBase UI helps us to get easily info of currently signed-in user
            if (user) {
                // User after signed in/up
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            }
            else {
                // User trying to signed out
                dispatch(removeUser());
                navigate('/');
            }

            // Cleanup function
            return () => {
                unsubscribe(); // This is the correct way to unsubscribe
            };
        });

    }, []);

    return (
        <div >
            <div className='absolute w-full h-20 bg-gradient-to-b from-black  z-10 '>
                <img className='w-48 relative left-6 top-2'
                    src={LOGO} alt='logo'
                />
                {user && (  //only show user-icon info when after sign IN/UP
                    <div >
                        <img className='w-12 relative bottom-14 left-[1405px]'
                            src={user?.photoURL} alt='user-icon' />
                        <button onClick={handleSignOut}
                            className='relative bottom-24 left-[1458px] text-white'>
                            <img className='w-10 rounded-full ml-1'
                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlky-Sg1nEZ0BNPd_XQZpBh7KZGBBu5ixzRQ&s' />
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Header;