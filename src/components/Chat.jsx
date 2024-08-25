import React, { useEffect, useState } from 'react';
import {auth, db } from '../firebase';
import {query, collection,  orderBy, onSnapshot, Timestamp} from 'firebase/firestore';
import Message from './Message';
const Chat = () => {
  const [message,setMessage] = useState([])

  useEffect (() => {

    const newQuery = query(collection(db,"Messages"), orderBy("timestamp"));

    const unsuscribe = onSnapshot(newQuery,(querySpanshot) => {
        let currentMessages = []

      querySpanshot.forEach(item =>{
        currentMessages.push({  content: item.data(), id: item.id})
      })
      
       setMessage(currentMessages)
    })
    return unsuscribe
  })
  return (
     <section className='chat-content'>
      {
      
      message && message.map(item =>(
        <Message  key={item.id} message={item.content}/>
      ))

      }
    
     </section>
  )
}

export default Chat
