import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const Login = () => {
    const login = async() =>{

        const provider =  new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
    }
  return (
 <GoogleButton onClick={login}/>
  )
}

export default Login