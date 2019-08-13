import React, { useContext } from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import Loading from './Loading'
import { RoomContext } from '../context/room-context'


const RoomContainer = () => {
  const { rooms, hasLoaded, sortedRooms } = useContext(RoomContext)
  
  return !hasLoaded ? <Loading /> : (

    <>
      <RoomsFilter rooms={ rooms } />
      <RoomsList rooms={ sortedRooms } />
    </>
  )
}

export default RoomContainer
