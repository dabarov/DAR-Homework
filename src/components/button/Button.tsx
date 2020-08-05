import React from "react";
import "./Button.scss";
import playIcon from "../../assets/play.svg";
import stopIcon from "../../assets/stop.svg";
import rightIcon from "../../assets/right.svg";
import leftIcon from "../../assets/left.svg";

type Props = {
  className: string;
<<<<<<< Updated upstream
  text: string;
=======
  text?: string;
>>>>>>> Stashed changes
  clickHandler?: () => void;
  type: "button" | "submit" | "reset";
  image?: number;
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

export const SVGButton: React.FunctionComponent<Props> = ({
  image,
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
      {image === 1 ? <img src={playIcon} alt=""/> : image === 2 ? <img src={stopIcon} alt=""/> : image === 3 ? <img src={leftIcon} alt=""/> : <img src={rightIcon} alt=""/>}
    </button>
  );
};
