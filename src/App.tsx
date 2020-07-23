import React, { useState } from "react";
import "./App.css";
import { Hello } from "./components/hello/hello";

function App() {

  const [clicked, setClicked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const buttonClickLoginHandler = () => {
    setClicked(!clicked);
  };

  const buttonClickNameAndAvatarHandler = () => {
    setName("Aldiyar")
    setAvatar("https://avatars1.githubusercontent.com/u/36531464?s=460&u=5020eec277211b28a767db5fa908a4c872671746&v=4")
  };

  return (
    <div className="App">
      <div className="App-wrapper">
        {clicked ? <Hello name={name} avatar={avatar} /> : null}
        <button className="App-login-btn" onClick={buttonClickLoginHandler}>
          Log in
        </button>

        <button className="App-login-btn" onClick={buttonClickNameAndAvatarHandler}>
          Show Name and Avatar
        </button>
      </div>
    </div>
  );
}

export default App;
