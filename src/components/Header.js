import React from 'react'
import { signOut } from "firebase/auth";  //firebase APi for signOut auth
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();

    //useSelector from strore to display name and profile pic of updated user
    const user = useSelector(store => store.user);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            navigate('/error')
        });
    }

    return (
        <div>
            <div className='absolute w-full bg-gradient-to-b from-black  z-10 '>
                <img className='w-48 relative left-16 top-2'
                    src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'
                />
                {user && (  //only show user-icon info when after sign IN/UP
                    <div>
                        <img className='w-16 relative bottom-16 left-[1370px]'
                            src={user?.photoURL} alt='user-icon' />
                        <button onClick={handleSignOut}
                            className='border rounded-md px-1 relative bottom-16 left-[1367px] text-white'>Sign Out
                        </button>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Header;