import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context/room-context'
import defaultBkgd from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const SingleRoom = ({ history }) => {
  const { getRoom } = useContext(RoomContext)

  useEffect(() => {
    getRoom(history.location.state.slug)
  }, [])
  
  return (
    <div>SingleRoom</div>
  )
}

export default SingleRoom
