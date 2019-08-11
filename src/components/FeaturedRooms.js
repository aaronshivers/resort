import React, { useContext } from 'react'
import { RoomContext } from '../context/room-context'
import Loading from './Loading'

const FeaturedRooms = () => {
  const { rooms, featuredRooms } = useContext(RoomContext)

  console.log(featuredRooms)

  return (
    <div>
      <Loading />
      FeaturedRooms
      {
        rooms.map(({ id, ...room }) => {

          return (
            <div key={ id }>
              hello
            </div>
          )
        })
      }
    </div>
  )
}

export default FeaturedRooms
