import React, { useState, useEffect } from "react";

const Chat = ({ socket }) => {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    debugger;
    console.log(message);
    console.log(messageList);
    socket.emit("message", { message });
    setMessage("");
    clearInput();
  };

  const clearInput = () => {
    document.querySelector("#input").value = ""; // mudar para useRef
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h1>Chat</h1>
      </div>
      <div className="chat-body">
        {messageList.map((data) => (
          <p>{data.message}</p>
        ))}
      </div>
      <div className="chat-footer">
        <input
          id="input"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
        />
        <button onClick={() => sendMessage()}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
