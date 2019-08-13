import React from 'react'

const RoomsFilter = ({ rooms }) => (
  <div>
    {
      rooms.map(({ name }, i) => (
        <div key={ i }>{ name }</div>
      ))
    }
  </div>
)

export default RoomsFilter
