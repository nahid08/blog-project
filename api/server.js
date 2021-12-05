const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
const http  = require('http').createServer(app);

const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true
  }
})

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(express.json());

require("./src/model");

require("./src/UserApi")(app);

http.listen(8080, () => {});


io.on("connection", (socket) => {

  console.log(socket.id);
  
   socket.emit('hello', {
     name: 'namir',
     text: 'are you sad nahid?'
   });

   socket.on("react", (data) => {
     console.log(data);
   })

   socket.on('chat', (data) => {
     const { username, text } = data;
     console.log(data);
     socket.broadcast.emit('chat',{
       username: username,
       text: text
     })
   })

   socket.emit('hello', 'world')
})