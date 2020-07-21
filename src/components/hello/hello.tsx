import React from "react";
import "./hello.css";

export const Hello = (props: { name: string; avatar: string }) => {
  return (
    <div className="hello-wrapper">
      <h1>Hello {props.name}</h1> 
      <img src={props.avatar || "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"} alt="Avatar" className="avatar" />
    </div>
  );
};
