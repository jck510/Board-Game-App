import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeMenu from './components/HomeMenu'
import MainBoard from './components/MainBoard'

// BOARD GAME APP
// Objective: Create a functioning board game web application that is playable by anyone who accesses the website
// Mission: This is meant to be a creative project to display my ability to create a nice looking and interactive website
/*
Game Description: You are a local delivery professional who is on the verge of getting replaced.
                  Your boss has given you the opportunity to show why you still deserve to keep your job.
                  You must travel across the board linearly to deliver 4 packages in 6 turns or less per package.
                  A package is considered delivered if you make 1 full traversal around the board
                  Your boss is giving you 3 chances until you are fired.
                  Who knows what you may encounter along your journey that may or may not help you along the way
                  

Game Details:
1 player
Travel: Linear traversal through the board using a 6 sided dice
Board: A square shaped board that has 22 different spaces
Board Features: The Restaurant Space (AKA the Start Space)
                5 chance spaces that give either a benefit to the player or a disservice depending on the random card pulled
                4 Risk Spaces where the player has the option of taking a risk which will either benefit them or deter them
                4 Good Fortune Spaces where the player gets a benefit no matter what
                1 Very good fortune space where the player gets a great benefit
                3 Negative Spaces where the player gets a negative consequence
                4 neutral spaces where nothing happens






          


*/


function App() {

  return (
    <>
      <div>
        <HomeMenu/>
        <MainBoard/>
        </div>
    </>
  )
}

export default App
