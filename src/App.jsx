import { useState } from "react";
import { io } from "socket.io-client";
import Home from "view/pages/Home/Home";
import Chat from "view/components/Chat/Chat";
import Join from "view/components/Join/Join";

const socket = io("http://localhost:3001");

function App() {
  const [chatVisible, setChatVisible] = useState(false);

  return (
    <div className="App">
      <Home />
      {/* {chatVisible ? (
        <Chat socket={socket} />
      ) : (
        <Join socket={socket} setChatVisible={setChatVisible} />
      )} */}
    </div>
  );
}

export default App;
