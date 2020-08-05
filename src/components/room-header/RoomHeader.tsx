import React, { useContext } from "react";
import { UserContext } from "../../services/context";

type Props = {};

export const RoomHeader: React.FunctionComponent<Props> = () => {
  const userState = useContext(UserContext);
  return userState && userState.user ? <h2>Welcome, {userState.user.firstname}!</h2> : null;
};
