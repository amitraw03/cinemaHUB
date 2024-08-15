import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";  //firebase APi for signOut auth
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { toggleAiSearch } from '../utils/aiSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const dispatch = useDispatch();  //to update the redux store
    const navigate = useNavigate();  //for navigating to another web page

    //useSelector from strore to display name and profile pic of updated user
    const user = useSelector(store => store.user);

    const showAiSearch = useSelector(store => store.ai.showAiSearch);  // to onlyshow languae option in AI-search section

    const handleAiSearch = () => {
        dispatch(toggleAiSearch());
    }

    const handleChangeLanguage = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    const handleSignOut = () => {                           // --- firebase API for signOut
        signOut(auth).then(() => { // Sign-out successful.
            navigate('/');
        }).catch((error) => {
            // An error happened.
            navigate('/error');
        });
    }

    //using useEffect to execute this(currUser SignIn) just once----for Auth USE
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {   //this is a fireBase UI helps us to get easily info of currently signed-in user 
            // & this is kind a listener which listen everytime auth changing event happening
            if (user) {
                // User is signed in
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                navigate('/browse');
            }
            else {
                // User is signed out
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
        <div className='absolute w-full h-20 bg-gradient-to-b from-black  z-50 '>
            <img className='w-48 relative left-6 top-2'
                src={LOGO} alt='logo'
            />
            {user && (  //only show user-icon info when after sign IN/UP
                <div >
                    {/*  modular codding- dynamic selecting of supported Languages  */}

                    {showAiSearch && (<select className='relative  bottom-14 left-[1200px] p-1 rounded-lg ' onChange={handleChangeLanguage}>
                        {SUPPORTED_LANG.map((lang) =>
                        (
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}

                    </select>)}

                    <button onClick={handleAiSearch}
                      className=' relative border px-3 py-1 bottom-14 rounded-lg left-[1220px] text-white hover:bg-red-700'>
                    {showAiSearch ? ( <b>HOME</b>) : (<b>AI-search</b>)} 
                    </button>

                    <img className='w-12 relative bottom-[100px] left-[1405px]'
                        src={user?.photoURL} alt='user-icon' />

                    <button onClick={handleSignOut}
                        className='relative bottom-36 left-[1458px] text-white'>
                        <img className='w-10 rounded-full ml-1'
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlky-Sg1nEZ0BNPd_XQZpBh7KZGBBu5ixzRQ&s' />
                    </button>
                </div>
            )}

        </div>
    )
}

export default Header;