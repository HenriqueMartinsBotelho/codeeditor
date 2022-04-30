import React, { useState } from "react";

const Join = ({ socket, setChatVisible }) => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    if (name.trim() === ``) return;
    socket.name = name;
    setChatVisible(true);
  };

  return (
    <div className="join-container">
      <div className="join-header">
        <h1>Join</h1>
      </div>
      <div className="join-body">
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => handleSubmit()}>Enter</button>
      </div>
    </div>
  );
};

export default Join;
