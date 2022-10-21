import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBb0lijt1rbV6so4OuGya4uSbZTRbcQDpg",
    authDomain: "exam-3393d.firebaseapp.com",
    projectId: "exam-3393d",
    storageBucket: "exam-3393d.appspot.com",
    messagingSenderId: "916681295330",
    appId: "1:916681295330:web:1b614b68b1dca219b1e5bb"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)