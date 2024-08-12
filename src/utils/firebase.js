// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeX3B5MM84GHkFiOc4o3TiEmWr_Tsix14",
  authDomain: "cinemahub-42547.firebaseapp.com",
  projectId: "cinemahub-42547",
  storageBucket: "cinemahub-42547.appspot.com",
  messagingSenderId: "897545538025",
  appId: "1:897545538025:web:3758e1351d0db0fe2d6378",
  measurementId: "G-GL4L6G9BV3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();