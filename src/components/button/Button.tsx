import React from "react";
import "./Button.scss";

type Props = {
  className: string;
  text: string;
  clickHandler?: () => void;
  type: "button" | "submit" | "reset";
};

export const Button: React.FunctionComponent<Props> = ({
  text,
  type,
  className,
  clickHandler,
}) => {
  return (
    <button
      type={type}
      className={"Button " + className}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};
