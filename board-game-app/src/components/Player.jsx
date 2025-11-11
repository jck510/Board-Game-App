import React from 'react';
import { useSelector } from 'react-redux';

const Player = () => {
  const userPosition = useSelector((state) => state.game.userPosition);

  return <div>Player Position: {userPosition}</div>;
};

export default Player;