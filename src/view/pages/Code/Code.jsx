import React from "react";
import Split from "react-split";
import "./code_style.css";

const CodeScreen = ({ children }) => {
  return (
    <div style={{ width: "400px", background: "blue", height: "300px" }}>
      {children}
    </div>
  );
};

const TitleBar = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px 30px",
        background: "pink",
      }}
    >
      {children}
    </div>
  );
};

const Code = () => {
  return (
    <div style={{ padding: "20px" }}>
      <TitleBar>
        <div></div>
        <input
          style={{
            borderRadius: "8px",
            border: "none",
            textAlign: "center",
            padding: "10px",
          }}
          placeholder="Project Name"
        />
        <button className="button-54">Desafio aleatório</button>
      </TitleBar>

      <Split
        style={{ backgroundColor: "red", height: "90vh" }}
        sizes={[70, 30]}
        minSize={100}
        // expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="vertical"
        cursor="col-resize"
      >
        <Split sizes={[20, 80]} style={{ display: "flex" }}>
          <div style={{ background: "blue" }}>content one</div>
          <div style={{ background: "blue" }}>content one</div>
          {/* <div style={{ background: "blue" }}>content one</div> */}
        </Split>

        <Split
          // direction="horizontal"
          style={{ display: "flex", background: "green" }}
        >
          <div style={{ background: "yellow" }}>content two</div>
        </Split>
      </Split>
    </div>
  );
};

export default Code;
