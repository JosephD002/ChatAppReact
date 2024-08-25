import React from 'react'
import Login from './Login'
import LogOut from './LogOut'
import { auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'



const User = () => {
     
  const [user]= useAuthState(auth);
  console.log(user);

  return (
    <div className='right-side'>
        <h1>ChatWhat</h1>
        <article className='card-user'>
            <img src='' alt=''/>
            <p>user name</p>
           {user ? <LogOut/> : <Login/>}
        </article>
      
    </div>
  )
}

export default User
