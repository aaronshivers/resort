import React, { useContext } from 'react'
import { RoomContext } from '../context/room-context'

const FeaturedRooms = () => {
  const { name, greeting } = useContext(RoomContext)

  return (
    <div>
      FeaturedRooms
      { name }{ greeting }
    </div>
  )
}

export default FeaturedRooms
