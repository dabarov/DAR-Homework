import React, { useState } from "react";
import YouTube from "react-youtube";
import { Chat } from "../chat/Chat";

import "./Room.scss";
import { RoomHeader } from "../../components/room-header/RoomHeader";
import { UserContext } from "../../services/context";
import { useParams } from "react-router-dom";
import { SVGButton } from "../../components/button/Button";

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

  const rewindForward = () => {
    player?.seekTo(player?.getCurrentTime() + 10);
  };

  const rewindBack = () => {
    player?.seekTo(player?.getCurrentTime() - 10);
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
            <SVGButton
              className="video-btn"
              clickHandler={rewindBack}
              type="button"
              image={3}
            />
            <SVGButton
              className="video-btn"
              clickHandler={toggleVideo}
              type="button"
              image={playerState !== PlayerStates.PLAYING ? 1 : 2}
            />
            <SVGButton
              className="video-btn"
              clickHandler={rewindForward}
              type="button"
              image={4}
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
