import React, { useContext } from 'react'
import { RoomContext } from '../context/room-context'
import Title from './Title'
import Loading from './Loading'
import Room from './Room'

const FeaturedRooms = () => {
  const { hasLoaded, featuredRooms: rooms } = useContext(RoomContext)

  return (
    <section className="featured-rooms">
      <Title title="Featured Rooms" />
      <div className="featured-rooms-center">
        {
          hasLoaded ?
            rooms.map(room => (
              <Room key={ room.id } { ...room } />
            )) :
            <Loading />
        }
      </div>
    </section>
  )
}

export default FeaturedRooms
