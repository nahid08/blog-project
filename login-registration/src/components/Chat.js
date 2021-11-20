import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { socket } from "../helper/Socket";

export default function Chat() {
  const [message, setMessage] = useState([]);
  const [text, setText] = useState("");

  const user = useSelector((state) => state.user);

  const username = user.username;

  useEffect(() => {
    socket.on("chat", (data) => {
      const { text } = data;
      if (username === data.username) {
        console.log(message);
        let textArray = message;
        textArray.push({
          text,
          flag: false,
        });
        setMessage([...textArray]);
        console.log(message);
      }
    });
  }, [socket]);

  const renderMessage = () => {
    console.log("render");
    return message.map((message) => {
      return (
        <>
          <p>{message.flag ? "me " : "nahid09 " }{message.text}</p>
        </>
      );
    });
  };

  const handleChage = (e) => {
    setText(e.target.value);
  };

  const send = () => {
    const textArray = message;
    textArray.push({
      text, flag:true
    });
    setMessage(textArray);
    setText("");
    socket.emit("chat", {
      username: username === "nahid08" ? "nahid09" : "nahid08",
      text,
    });
  };

  const sendByKey = (e) => {
    console.log('enter');
    if (e.key == "Enter") {
      const textArray = message;
      textArray.push(text);
      setMessage(textArray);
      setText("");
      socket.emit("chat", {
        username: username === "nahid08" ? "nahid09" : "nahid08",
        text,
      });
    }
  };

  return (
    <>
      <h1>Chat</h1>
      {renderMessage()}
      <Form.Control type="text" value={text} onChange={handleChage} onKeyPress={sendByKey}/>
      <Button onClick={send} >
        Submit
      </Button>
    </>
  );
}
