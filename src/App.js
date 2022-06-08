import './App.css';
import { FiSend } from 'react-icons/fi';
import { firebaseDatabase } from './Backend/firebase-handler';
import { set, push,ref,onValue, } from 'firebase/database';
import { async } from '@firebase/util';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { ImProfile } from 'react-icons/im';


function App() {
  const [userMessage, setUserMessage] = useState("");
  const [messages, setMessages] = useState ([]);

  useEffect(() => {
    const messagesRef = ref(firebaseDatabase, `MESSAGES`);
    onValue (messagesRef, (snapshot) => {
      if(snapshot.exists()) {
        setMessages(Object.values(snapshot.val()).reverse());
        Object.values(snapshot.val())
      }
    },{ onlyOnce:false }) 
  }, [])

  console.log(messages)


  const handleMessageSend = async ( ) => {
    const messageKeyRef = ref(firebaseDatabase, `MESSAGES`);
    const key = push(messageKeyRef).key;
    const messageRef = ref(firebaseDatabase, `MESSAGES/${key}`);
    await set(messageRef, {
      message: userMessage,
      name:'Meghana A',
      timeStamp:moment().format('MMMM Do YYYY, h:mm:ss a')
    });
    setUserMessage("")
  }



  return (
    <div className="App">
      <div className='message-container'>
        {
          messages.map(item => {
            return(
              <div className='message-arch-container'>
                <ImProfile size={20}/>
                <div className='message-info-container'>
                  <p className='message-sender'>{item.name}</p>
                  <p className='message'>{item.message}</p>

                </div>
                </div>

            )
          })
        }

      </div>
      <div className='action-container'>
        <input value={userMessage} onChange={event => setUserMessage(event.target.value)} className='message-input' placeholder='Write your message...'/>
        <button className='send-button' onClick={handleMessageSend} >
          Send
          <FiSend size={20} color='black'/>

        </button>

      </div>

     
    </div>
  );
}

export default App;