import React from 'react'
import { GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import { auth } from '../firebase';


const Login = () => {


  

 
  

  const googleLogin = () => {
     const provider =  new GoogleAuthProvider();
     signInWithPopup(auth,provider);
  }

  return (
   <button className='btn-login' onClick={googleLogin}>
    <i className="fa-brands fa-google"></i>
   sign in with google
   </button>
  )
}

export default Login
