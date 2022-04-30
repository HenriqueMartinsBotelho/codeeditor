import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        background: "black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          border: "none",
          borderRadius: "4px",
          padding: "10px 40px",
          fontSize: "30px",
          background: "#58FF53",
          color: "black",
          cursor: "pointer",
        }}
      >
        <Link to="/code/43434">Criar Sala</Link>
      </button>
    </div>
  );
};

export default Home;
