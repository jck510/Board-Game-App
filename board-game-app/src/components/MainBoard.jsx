import React from 'react'
import BoardSpace from './BoardSpace'
import CenterBoard from './CenterBoard'

let BoardSpaces = [
    {spaceNumber: 0, spaceName: 'The Shop', spaceType: 'Start', currentSpace: true},
    {spaceNumber: 1, spaceName: 'Fruit Vendor', spaceType: 'Risk', currentSpace: false},
    {spaceNumber: 2, spaceName: 'Passage Ave', spaceType: 'Neutral', currentSpace: false},
    {spaceNumber: 3, spaceName: 'School', spaceType: 'Chance', currentSpace: false},
    {spaceNumber: 4, spaceName: 'Hospital', spaceType: 'Bad', currentSpace: false},
    {spaceNumber: 5, spaceName: 'Prosperity Way', spaceType: 'Good', currentSpace: false},
    {spaceNumber: 6, spaceName: 'Bus Station', spaceType: 'Great', currentSpace: false},
    {spaceNumber: 7, spaceName: 'Optimism Drive', spaceType: 'Good', currentSpace: false},
    {spaceNumber: 8, spaceName: 'The Friendly Neighbors', spaceType: 'Chance', currentSpace: false},
    {spaceNumber: 9, spaceName: 'Grand Ave', spaceType: 'Neutral', currentSpace: false},
    {spaceNumber: 10, spaceName: 'Recreation Center', spaceType: 'Risk', currentSpace: false},
    {spaceNumber: 11, spaceName: '', spaceType: 'Good', currentSpace: false},
    {spaceNumber: 12, spaceName: 'The Shop', spaceType: 'Risk', currentSpace: false},
    {spaceNumber: 13, spaceName: 'The Shop', spaceType: 'Bad', currentSpace: false},
    {spaceNumber: 14, spaceName: 'Alleyway 1', spaceType: 'Chance', currentSpace: false},
    {spaceNumber: 15, spaceName: 'Alleyway 2', spaceType: 'Chance', currentSpace: false},
    {spaceNumber: 16, spaceName: '', spaceType: 'Neutral', currentSpace: false},
    {spaceNumber: 17, spaceName: 'Rollerskate Shop', spaceType: 'Good', currentSpace: false},
    {spaceNumber: 18, spaceName: 'Main St', spaceType: 'Neutral', currentSpace: false},
    {spaceNumber: 19, spaceName: 'The Shop', spaceType: 'Risk', currentSpace: false},
    {spaceNumber: 20, spaceName: '', spaceType: 'Chance', currentSpace: false},
    {spaceNumber: 21, spaceName: 'The Construction Zone', spaceType: 'Bad', currentSpace: false},

]

const MainBoard = () => {
  return (
    <div>
        <div className='main-board-wrapper'>
        <div className='main-board'>
            {BoardSpaces.map((space, index) => (
                <BoardSpace key={index} spaceName={space.spaceName} spaceType={space.spaceType} location={space.spaceNumber} currentSpace={space.currentSpace}/>
            ))}
        </div>

        <CenterBoard />
        </div>
    </div>
  )
}

export default MainBoard