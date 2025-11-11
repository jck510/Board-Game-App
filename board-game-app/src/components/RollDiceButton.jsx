import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dice from './Dice';
import { setDiceNumber, setUserPosition } from '../features/game/gameSlice';
import Player from './Player';

const RollDiceButton = () => {
  const dispatch = useDispatch();
  const userPosition = useSelector((state) => state.game.userPosition);
  const totalSpaces = useSelector((state) => state.game.totalSpaces);

  const rollDiceAndMove = () => {
    // Roll a random number between 1 and 6
    const roll = Math.floor(Math.random() * 6) + 1;
    dispatch(setDiceNumber(roll)); // update Redux diceNumber

    // Animate movement across the board
    let currentPos = userPosition;

    for (let step = 1; step <= roll; step++) {
      setTimeout(() => {
        currentPos = (currentPos + 1) % totalSpaces;
        dispatch(setUserPosition(currentPos));
      }, step * 750); // 750ms per step
    }
  };

  return (
    <div>
      <Dice />
      <button onClick={rollDiceAndMove}>Roll Dice!</button>
      <Player />
    </div>
  );
};

export default RollDiceButton;
