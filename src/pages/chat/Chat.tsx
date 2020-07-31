import React, { useState, useEffect, useReducer } from "react";
import { Input } from "../../components/input/Input";
import "./Chat.scss";
import { Button } from "../../components/button/Button";
import { UserInfo } from "../../types/interfaces";
import {
  useWebSocket,
  chatStateReducer,
  ChatActions,
} from "../../services/chat";
import { ChatMessages } from "./chat-messages/ChatMessages";

type Props = {
  user: UserInfo | null;
};

export const Chat: React.FunctionComponent<Props> = ({ user }) => {
  const [state, dispatch] = useReducer(chatStateReducer, { messages: [] });

  const [message, setMessage] = useState<string>("");

  const socketClient = useWebSocket({
    userId: user?.firstname,
  });

  const messageHandler = (value: string) => {
    setMessage(value);
  };

  const messageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    socketClient.sendMessage(message);
  };

  const onMessage = ({ data }: { data: string }) => {
    console.log(data);
    dispatch({
      type: ChatActions.ADD_MESSAGE,
      payload: data,
    });
  };

  useEffect(() => {
    socketClient.eventEmitter.on("message", onMessage);

    return () => {
      socketClient.eventEmitter.off("message", onMessage);
      socketClient.close();
    };
  }, [socketClient]);

  return (
    <div className="Chat">
      <ChatMessages messages={state.messages} />
      <form onSubmit={messageSubmit}>
        <div className="form-group">
          <Input
            name="message"
            required={true}
            value={message}
            placeholder="Enter message"
            onChange={messageHandler}
            chat={true}
          />
        </div>
        <div className="btn-wrapper">
          <Button type="submit" className="btn" text="Send" />
        </div>
      </form>
    </div>
  );
};
