import "./ChatUI.css";
import { io } from "socket.io-client";
import { useNavigate } from 'react-router-dom';
import {useEffect, useState} from 'react'

const socket = io('https://soyodur-api1.onrender.com/')

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
      <main className="messages">

        

        
        {userInfo.map((item)=>{

      return(<>
      <div className="msg-row sent">
          <div className="bubble">
            {item.msg}
            <small>10:21 AM</small>
          </div>
        </div>
      
      </>)
        })}

        {AllMsg.map((item)=>{

      return(
        <>
        <div className="msg-row received">
          <div className="bubble">
            <div className="sender-name">{item.user}</div>
            {item.msg}
            <small>10:20 AM</small>
          </div>
        </div>
      </>)
        })}
        

      </main>


      {/* Input */}
      <footer className="message-input">

        <button className="attach-btn">＋</button>

        <input onChange={(e)=>{
      setNewUser(e.target.value)
        }}
          type="text"
          placeholder="Message..."
        />

        
        <button className="send-btn" onClick={()=>{


      const UserInfo = [...userInfo, {'user': username,
  'msg': NewUser}]
    
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
