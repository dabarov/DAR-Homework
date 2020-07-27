import React from "react";
import { Input } from "../../components/input/Input";

type Props = {};

export const Chat: React.FunctionComponent<Props> = () => {
  const messageHandler = (value: string) => {
    console.log(value);
  };
  return (
    <div className="Chat">
      <Input
        name="message"
        required={true}
        placeholder="Enter message"
        onChange={messageHandler}
      />
    </div>
  );
};
