 import { useRef, useEffect } from 'react';
 import { ChatMessage } from './ChatMessage';
 import './ChatMessages.css';
 function ChatMessages({
      chatMessages}) {
        const chatMessagesRef =useRef(null);

        useEffect( ()=>{
          console.log( chatMessagesRef.
            current);
        },[chatMessages]
        );
        return(
          <div className='chat-messages-container'
           ref={chatMessagesRef}>
           {chatMessages.map((chatmessage)=> {
            return(
            <ChatMessage
                message={chatmessage.message}
                sender={chatmessage.sender}
                key={chatmessage.id}
            />
          );
        })}
       </div>
      );
      }

      export default ChatMessages;