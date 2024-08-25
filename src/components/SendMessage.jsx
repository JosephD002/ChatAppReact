import React from 'react';
import { useState } from 'react';
import { addDoc,collection, serverTimestamp } from 'firebase/firestore';
import {db,auth} from '../firebase';

const SendMessage = () => {

    const [input,setInput] = useState ('');

    const sendMessage = async e => {

     e.preventDefault()
     const {uid,displayName, photoURL} = auth.currentUser

     await addDoc(collection(db,'Messages'),{
        text: input,
        name: displayName,
        uid,
        photo:photoURL,
        timestamp:serverTimestamp()
     })
     setInput("");
    }
  return (
    <form onSubmit={sendMessage}>
        <input type='text' placeholder='Escribe tu mensaje'  value={input} onChange={e => setInput(e.target.value)}/>
        <button type='Submit'>Enviar</button>
    </form>
  )
}

export default SendMessage
