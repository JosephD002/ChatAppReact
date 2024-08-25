import React from 'react'
import Login from './Login'
import LogOut from './LogOut'
import { auth } from '../firebase';
import {useAuthState} from 'react-firebase-hooks/auth'



const User = () => {
     
  const [user]= useAuthState(auth);
  console.log(user);

  const image = user ? user.photoURL : ""
  const name = user ? user.displayName : ""

  return (
    <div className='right-side'>
        <h1><i className="fa-regular fa-comments"></i>ChatWhat</h1>
        <article className='card-user'>
            <img src='' alt='' referrerPolicy='no-referrer'/>
            <p>{name}</p>
           {user ? <LogOut/> : <Login/>}
        </article>
      
    </div>
  )
}

export default User
