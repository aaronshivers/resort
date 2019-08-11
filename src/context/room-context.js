import React, { createContext, useState, useEffect } from 'react'
import items from '../data'

const RoomContext = createContext()

const initialState = {
  rooms: [],
  sortedRooms: [],
  featuredRooms: [],
  loading: true
}

const RoomProvider = ({ children }) => {
  const [ state, setState ] = useState(initialState)
  const [ rooms, setRooms ] = useState([])
  const [ featuredRooms, setFeaturedRooms ] = useState([])

  useEffect(() => {
    setRooms(
      items.map(item => {
        const id = item.sys.id
        const images = item.fields.images.map(image => image.fields.file.url)
        return { ...item.fields, images, id }
      })
    )
  }, [])

  useEffect(() => {
    setFeaturedRooms(
      rooms.filter(({ featured }) => featured)
    )
  }, [rooms])

  // useEffect(() => console.log(featuredRooms), [featuredRooms])

  return (
    <RoomContext.Provider value={{ rooms, featuredRooms }}>
      { children }
    </RoomContext.Provider>
  )
}

const RoomConsumer = RoomContext.Consumer

export {
  RoomContext,
  RoomProvider,
  RoomConsumer
}
