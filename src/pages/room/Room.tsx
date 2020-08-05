import React, { useState } from "react";
import YouTube from "react-youtube";
import { Chat } from "../chat/Chat";

import "./Room.scss";
import { RoomHeader } from "../../components/room-header/RoomHeader";
import { UserContext } from "../../services/context";
import { useParams } from "react-router-dom";
import { Button } from "../../components/button/Button";

enum PlayerStates {
  PLAYING = "PLAYING",
  PAUSED = "PAUSED",
}

export const Room: React.FunctionComponent = () => {
  const { id } = useParams();
  const [player, setPlayer] = useState<any>(null);
  const [playerState, setPlayerState] = useState<PlayerStates>();

  const onVideoInit = (event: { target: any }) => {
    setPlayer(event.target);
  };

  const toggleVideo = () => {
    if (playerState !== PlayerStates.PLAYING) {
      player?.playVideo();
      setPlayerState(PlayerStates.PLAYING);
    }
    if (playerState === PlayerStates.PLAYING) {
      player?.pauseVideo();
      setPlayerState(PlayerStates.PAUSED);
    }
  };

  return (
    <div className="Room">
      <RoomHeader />
      <div className="room-wrapper">
        <div>
          <YouTube
            className="youtube-video"
            onReady={onVideoInit}
            videoId={id}
            containerClassName="video"
          />
          <div className="video-controls">
            <Button
              clickHandler={toggleVideo}
              type="button"
              text={playerState !== PlayerStates.PLAYING ? "Play" : "Pause"}
            />
          </div>
        </div>

        <UserContext.Consumer>
          {(value) => <Chat user={value?.user} />}
        </UserContext.Consumer>
      </div>
    </div>
  );
};
