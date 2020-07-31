import React from "react";
import YouTube from "react-youtube";
import { Chat } from "../chat/Chat";

import "./Room.scss";
import { UserContext } from "../../App";

export const Room: React.FunctionComponent = () => {
  return (
    <div className="Room">
      <YouTube className="youtube-video" videoId={"8iUXJShdicY"} containerClassName="video" />
      <UserContext.Consumer>
        {({ user }) => <Chat user={user} />}
      </UserContext.Consumer>
    </div>
  );
};
