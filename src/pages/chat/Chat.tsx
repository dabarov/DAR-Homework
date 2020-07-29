import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import "./Chat.scss";
import { Button } from "../../components/button/Button";

type Props = {};

interface Message {
  id: number;
  author: string;
  text: string;
}

export const Chat: React.FunctionComponent<Props> = () => {
  const [newMessage, setNewMessage] = useState<string>("");
  const currentUser = "Aldiyar";
  let oldMessages = [
    {
      id: 0,
      author: "Mark",
      text: "Hey everyone",
    },
    {
      id: 1,
      author: "Alex",
      text: "Hello",
    },
    {
      id: 2,
      author: "Gwen",
      text: "Hello",
    },
    {
      id: 3,
      author: "Alex",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at accumsan lacus. Morbi mollis odio sed vulputate laoreet. Suspendisse feugiat iaculis porta. Morbi varius iaculis bibendum. Morbi nibh lectus, eleifend id gravida in, accumsan eget diam. Aliquam id massa vitae dui convallis vestibulum in in turpis. Nam eu nulla in nunc imperdiet malesuada. Suspendisse potenti. Fusce cursus sagittis sapien, vitae pellentesque elit lacinia tristique.",
    },
    {
      id: 4,
      author: "Gwen",
      text:
        "Donec egestas non lectus et porta. Maecenas varius libero at mattis pulvinar. ",
    },
    {
      id: 5,
      author: "Gwen",
      text: "Okay?",
    },
    {
      id: 6,
      author: "Mark",
      text: "Okay",
    },
  ];

  const [messages, setMessages] = useState<Message[]>(oldMessages);

  const sendHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newMessage) {
      return;
    }
    setMessages([
      {
        id: 1,
        author: currentUser,
        text: newMessage,
      },
      ...messages,
    ]);
    console.log(messages);
  };

  const messageHandler = (value: string) => {
    setNewMessage(value);
    console.log(value);
  };
  return (
    <div className="Chat">
      <div className="chat-box">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <h2 className="message-author"> {message.author} </h2>
            <p className="message-text"> {message.text} </p>
          </div>
        ))}
      </div>
      <form onSubmit={sendHandler} className="form-group">
        <Input
          name="chat-text"
          required={true}
          placeholder="Enter message"
          onChange={messageHandler}
          chat={true}
        />
        <Button className="App-login-btn" type="submit" text="Send" />
      </form>
    </div>
  );
};
