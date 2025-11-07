import React from 'react'

const BoardSpace = ({spaceName, spaceType, location, currentSpace}) => {
  return (
    <div className='board-space'>
        <h3>{spaceName}</h3>
        
        {/* <h5>{spaceType}</h5> */}

        {/* {spaceType == 'Good' && <div className='good-space-div'><h3 className='good-space-title'>{spaceName}</h3></div>} */}

        
    </div>
  )
}

export default BoardSpace