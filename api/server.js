const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const aws = require("aws-sdk");
const fs = require("fs");

const app = express();
const http  = require('http').createServer(app);
const upload = multer({dest: 'uploads/'});

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

app.use((req, res, next) => {
  req.io = io;
  next();
})

require("./src/UserApi")(app);

http.listen(8080, () => {});


io.on("connection", (socket) => {
   socket.on('chat', (data) => {
     const { username, text } = data;
     socket.broadcast.emit('chat',{
       username: username,
       text: text
     })
   })

   socket.on('comment', (data) => {
     console.log(data);
   })

   socket.emit('hello', 'world')
})