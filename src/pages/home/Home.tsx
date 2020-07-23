import React, { useState } from "react";
import "./Home.scss";
import { Hello } from "../../components/hello/hello";
import { Button } from "../../components/button/Button";

export const Home: React.FunctionComponent = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");

  const buttonClickLoginHandler = () => {
    setClicked(!clicked);
    setName("Aldiyar");
    setAvatar(
      "https://avatars1.githubusercontent.com/u/36531464?s=460&u=5020eec277211b28a767db5fa908a4c872671746&v=4"
    );
  };

  const buttonClickChangeName = () => {};
  return (
    <div className="Home">
      {clicked ? <Hello name={name} avatar={avatar} /> : null}
      <div className="wrapper">
        <Button
          className="App-login-btn"
          clickHandler={buttonClickLoginHandler}
          text="Log in"
        />
        <Button
          className="App-login-btn"
          clickHandler={buttonClickChangeName}
          text="Change Name"
        />
      </div>
    </div>
  );
};
