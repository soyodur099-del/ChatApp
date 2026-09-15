import "./ChatUI.css";
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'
import {useRef} from 'react'

const socket = io('https://soyodur-api.onrender.com')

function ChatUI({setUserInfo, userInfo, username}) {

  const [AllMsg, setAllMsg] = useState([])
  const [NewUser, setNewUser] = useState('')

  const MsgSet = (msg)=>{
    setAllMsg(msg)
    console.log(msg)
    
  }
  const nevigate = useNavigate()

  if(username === ""){
    nevigate('/')
  }

  
useEffect(()=>{
  socket.on()
  socket.on('recieve', MsgSet)
  
}), [userInfo];

  //msg send to backend

  const sendMsg = (userInfo)=>{
    socket.emit('send-msg', userInfo)
    
    
  }

  const msgRef = useRef(null);
  const [Time, setTime] = useState("")
  




  
  console.log(userInfo)
  return (
    <div className="chat-app">

      {/* Header */}
      <header className="chat-header">
        <button className="back-btn">‹</button>

        <div className="profile">
          <div className="profile-img">{username[0]}</div>

          <div className="profile-info">
            <h3>{username}</h3>
            <span>Online</span>
          </div>
        </div>

        <button className="more-btn">⋮</button>
      </header>


      {/* Messages */}
      <main ref={msgRef} className="messages">

        

        

        {AllMsg.map((item)=>{

      return(
        <>
        <div className="msg-row received">
          <div className="bubble">
            <div className="sender-name">{item.user}</div>
            {item.msg}
            <small>{item.time}</small>
          </div>
        </div>
      </>)
        })}
        

      </main>


      {/* Input */}
      <footer className="message-input">

        <button className="attach-btn">＋</button>

        <input onChange={(e)=>{
      const CurrentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();
      setTime(CurrentTime);
      console.log(CurrentTime);
      setNewUser(e.target.value)
        }}
          type="text"
          placeholder="Message..."
        />

        
        <button className="send-btn" onClick={()=>{
const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  }).toUpperCase();
      setTime(currentTime);
      console.log(currentTime);


      
      {msgRef.current.innerHTML +=`<div class="msg-row sent">
          <div class="bubble">
          <div class="sender-name"></div>
            ${NewUser}
            <small>${Time}</small>
          </div>
        </div>`};


      const UserInfo = [...userInfo, {'user': username,
  'msg': NewUser,
  'time': currentTime}]
    
setUserInfo(UserInfo)
      
setTimeout(()=>{
  sendMsg(UserInfo)
  
}, 1000)
      
        }}>➤</button>
        

      </footer>

    </div>
  );
}

export default ChatUI;
