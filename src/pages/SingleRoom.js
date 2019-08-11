import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context/room-context'
import defaultBkgd from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const SingleRoom = ({ history }) => {

  useEffect(() => {
    console.log(history.location)
  }, [])
  
  const { getRoom } = useContext(RoomContext)
  // console.log(getRoom)

  return (
    <div>SingleRoom</div>
  )
}

export default SingleRoom
