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
        borderBottom: "1px solid black",
      }}
    >
      {children}
    </div>
  );
};

const GitContainer = ({ children }) => {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        overflow: "auto",
      }}
    >
      {children}
    </div>
  );
};

const GitCard = ({ date, message, autor, hash, selected }) => {
  return (
    <div
      style={{
        width: "90%",
        padding: "10px",
        height: "auto",
        background: selected === "true" ? "#0d6efd" : "white",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        border: "1px solid #E5E7EB",
        borderRadius: "8px",
      }}
    >
      <div style={{ fontSize: "20px" }}>{date}</div>
      <div>{message}</div>
      <div style={{ color: "#6c757d" }}>Autor: {autor}</div>
      <div style={{ display: "flex", gap: "12px", color: "#6c757d" }}>
        Hash:{" "}
        <div
          style={{
            color: "black",
            width: "auto",
            background: "#e9ecef",
            fontWeight: "bold",
            borderRadius: "8px",
            padding: "4px",
          }}
        >
          {hash}
        </div>
      </div>
    </div>
  );
};

const Code = () => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ border: "1px solid black" }}>
        <TitleBar>
          <div></div>
          <input
            style={{
              borderRadius: "8px",
              border: "1px solid black",
              textAlign: "center",
              padding: "10px",
              fontSize: "18px",
              marginLeft: "150px",
            }}
            placeholder="Project Name"
          />
          <button className="button-54">Desafio aleatório</button>
        </TitleBar>

        <Split
          style={{ height: "90vh" }}
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
            <GitContainer>
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>Git</div>
              <div style={{ display: "flex" }}>
                <input
                  style={{ padding: "4px" }}
                  type="text"
                  placeholder="Mensagem"
                />
                <button
                  style={{
                    padding: "4px",
                    border: "1px solid black",
                    borderLeft: "none",
                    cursor: "pointer",
                  }}
                >
                  Commit
                </button>
              </div>
              <GitCard
                date="01/05/2022 - 9:23"
                message="commit message"
                autor="Henrique"
                hash="g31141nfa"
                selected="true"
              />
              <GitCard
                date="01/05/2022 - 9:26"
                message="commit message2"
                autor="Henrique"
                hash="bb25141ggg"
                selected="false"
              />
              <GitCard
                date="01/05/2022 - 9:26"
                message="commit message2"
                autor="Henrique"
                hash="bb25141ggg"
                selected="false"
              />
              <GitCard
                date="01/05/2022 - 9:26"
                message="commit message2"
                autor="Henrique"
                hash="bb25141ggg"
                selected="false"
              />
              <GitCard
                date="01/05/2022 - 9:26"
                message="commit message2"
                autor="Henrique"
                hash="bb25141ggg"
                selected="false"
              />
            </GitContainer>
            <div>content one</div>
            {/* <div style={{ background: "blue" }}>content one</div> */}
          </Split>

          <Split
            // direction="horizontal"
            style={{ display: "flex" }}
          >
            <div>content two</div>
          </Split>
        </Split>
      </div>
    </div>
  );
};

export default Code;
