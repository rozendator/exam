import React from 'react'
import {auth} from '../../firebase'
import {signOut} from 'firebase/auth'

const Logout = () => {
    const logout=()=>{
        signOut(auth)
    }
  return (
   <button className='btn btn-danger' onClick={logout}>Exit</button>
  )
}

export default Logout