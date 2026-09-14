const express = require('express');
const {Server} = require('socket.io');
const http = require('http');



const App = express();


const server = http.createServer(App);
const io = new Server(server, {
  cors: {
    origin: "*"
  
  }
});

io.on('connection', (socket)=>{
  console.log('user connected')
  socket.on('disconnect', ()=>{
    console.log('user disconnected')
  })

//data recieve from frontend

  socket.on('send-msg', (UserInfo)=>{
    console.log(UserInfo)
    socket.broadcast.emit('recieve', UserInfo)
  })

  
})


server.listen('3000', (req, res)=>{
  console.log('Server Started at Port 3000');
})