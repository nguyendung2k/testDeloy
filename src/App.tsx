import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
declare global {
  interface window {
    ReactNativeWebView: any;
  }
}
function App() {
  useEffect(() => {
    const sendRandomMessage = () => {
      window.postMessage(
        JSON.stringify({ cookieId: `Hello anh em ${Math.random()}` }),
        "*"
      );
    };

    console.log("first111");
    sendRandomMessage();
    // const interval = setInterval(sendRandomMessage, 2000);

    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          onClick={() => {
            console.log("first");
            window.postMessage(
              JSON.stringify({ cookieId: `Hello anh em ${Math.random()}` }),
              "*"
            );
          }}
        >
          12312
        </Button>
      </header>
    </div>
  );
}

export default App;
