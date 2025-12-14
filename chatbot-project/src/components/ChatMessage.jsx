import RobotProfileImage from '../assets/robot.jpg';
import UserProgileImage from '../assets/users.jpg';
import './ChatMessages.css';
export function ChatMessage({message,sender}){
    
      return(
        <div className={sender ===
          'user'
           ? 'chat-message-user' : 
             'chat-message-robot'
        }>
        {sender === 'robot' && (
          <img src={RobotProfileImage}
               className='chat-message-profile'
          />
        )}
       <div className='chat-message-text'>
         {message}
       </div>
        {sender === 'user'   &&   (
          <img src={UserProgileImage} 
               className='chat-message-profile' 
              
          />
        )}
        </div>
      );
     }
     // (مرحله دوم خلاصه کردن فقط کافیه message,sender داخل {}بنویسیم )
    // const message=props.message;
    //  const sender=props.sender;
    // (مرحله اول خلاصه کردن)برای کوتاه تر شدن دو خط کد بالا  فقط یک خط کد زیر رو مینویسی
    //const { message,sender}=props;
      /* if(sender === 'robot'){
       return(
          <div>
        <img src="robot.png" width="50"/>
        {message}
        </div>
  
       );
       بجای ifاز && استفاده کردیم که خیلی کوتاه تر شد کدمون
     */ 