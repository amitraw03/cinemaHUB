import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
    ]);

    //using useEffect to execute this(currUser SignIn) just once
    useEffect(() =>{
      onAuthStateChanged(auth, (user) => {   //this is a fireBase UI helps us to get easily info of currently signed-in user
        if (user) {
          // User after signed in/up
          const {uid, email , displayName} = user;
          dispatch(addUser({uid: uid ,email:email, displayName:displayName }));
        }
         else {
          // User trying to signed out
          dispatch(removeUser());
        }
      });  

    },[]);

  return (
    <div>
          <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;