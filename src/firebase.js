import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDkmOlbHIcdHkpWPfRSHa_0cvFD1uxy9F0",
    authDomain: "chatapp-1d392.firebaseapp.com",
    projectId: "chatapp-1d392",
    storageBucket: "chatapp-1d392.appspot.com",
    messagingSenderId: "855652644376",
    appId: "1:855652644376:web:b30b2c3675f2c22597b56d"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)
  export const db = getFirestore(app)


