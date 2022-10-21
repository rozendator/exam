import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav';
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../../firebase'
import Logout from './Logout';
import Login from './Login';


const BootstrapNavBar = () => {
  const [user] = useAuthState(auth)
  // const username = user.displayName
  // const photo = user.photoURL
   console.log(user);
  return (
    <Navbar  collapseOnSelect expand='sm' >
    <Navbar.Toggle aria-controls='myNavbar'/>
    <Navbar.Collapse id='myNavbar'>
        <Nav>
            <Nav.Link style={{color:'white'}} as={Link} to='/'>Home</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to='/search'>Search</Nav.Link>
          

        </Nav>

    </Navbar.Collapse>
   
    {user ?
        <>
            <img style={{}}src={user.photoURL} alt=''/>
            <div>{user.displayName}</div>
               <Logout/>
        </>
        :<Login/>}
     
</Navbar>
  )
}

export default BootstrapNavBar