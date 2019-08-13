import React, { createContext, useState, useEffect, useReducer } from 'react'
import items from '../data'

const RoomContext = createContext()

const initialState = items.map(item => {
  const id = item.sys.id
  const images = item.fields.images.map(image => image.fields.file.url)
  return { ...item.fields, images, id }
})

const RoomProvider = ({ children }) => {
  const [ room, setRoom ] = useState([])
  const [ rooms ] = useState(initialState)
  const [ featuredRooms, setFeaturedRooms ] = useState([])
  const [ hasLoaded, setHasLoaded ] = useState(false)

  useEffect(() => {
    setFeaturedRooms(
      rooms.filter(({ featured }) => featured)
    )

    !!rooms[0] && setHasLoaded(true)
  }, [rooms])

  const getRoom = slug => setRoom(rooms.find(room => room.slug === slug))

  return (
    <RoomContext.Provider value={{ room, rooms, featuredRooms, hasLoaded, getRoom }}>
      { children }
    </RoomContext.Provider>
  )
}

export {
  RoomContext,
  RoomProvider
}
