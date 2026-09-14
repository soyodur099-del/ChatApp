
import ChatUI from './components/ChatUI.jsx'
import Login from './components/login.jsx'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import {useState} from 'react';








const App =()=>{
  const [userInfo, setUserInfo] = useState([]);

  const [username, setUsername]=useState("");



 return(
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login username={username} setUsername={setUsername} setUserInfo={setUserInfo}/>} />
        <Route path="/chat" element={<ChatUI  setUserInfo={setUserInfo} userInfo={userInfo} username={username}/>} />
      </Routes>
    </BrowserRouter>
 
 )
  
}

export default App;