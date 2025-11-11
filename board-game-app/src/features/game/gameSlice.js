import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  diceNumber: 1,
  userPosition: 0,
  totalSpaces: 22,
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    // sets the dice number to a specific value
    setDiceNumber: (state, action) => {
      state.diceNumber = action.payload;
    },
    // sets the player position to a specific value
    setUserPosition: (state, action) => {
      state.userPosition = action.payload;
    },
    // resets both dice and position
    resetGame: (state) => {
      state.diceNumber = 1;
      state.userPosition = 0;
    },
    // roll a random dice (pure)
    rollDice: (state) => {
      state.diceNumber = Math.floor(Math.random() * 6) + 1;
    },
    // move player by a given number of spaces
    moveBy: (state, action) => {
      state.userPosition = (state.userPosition + action.payload) % state.totalSpaces;
    },
    // optional combined action: roll dice and move player
    rollAndMove: (state, action) => {
      const roll = action.payload; // number passed from component
      state.diceNumber = roll;
      state.userPosition = (state.userPosition + roll) % state.totalSpaces;
    },
  },
});

// 🔹 Named exports of all actions
export const {
  setDiceNumber,
  setUserPosition,
  resetGame,
  rollDice,
  moveBy,
  rollAndMove,
} = gameSlice.actions;

// 🔹 Default export of reducer
export default gameSlice.reducer;