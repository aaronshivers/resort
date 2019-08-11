import React, { createContext, useState, useEffect } from 'react'
import items from '../data'

const RoomContext = createContext()

// const initialState = {
//   rooms: [],
//   sortedRooms: [],
//   featuredRooms: [],
//   loading: true
// }

const RoomProvider = ({ children }) => {
  // const [ state, setState ] = useState(initialState)
  const [ rooms, setRooms ] = useState([])
  const [ featuredRooms, setFeaturedRooms ] = useState([])
  const [ hasLoaded, setHasLoaded ] = useState(false)
  const [ slug, setSlug ] = useState([])

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

    !!rooms[0] && setHasLoaded(true)
  }, [rooms])

  const getRoom = slug => setSlug(
    rooms.find(room => console.log(room.slug === slug))
  )

  useEffect(() => console.log(slug), [slug])

  return (
    <RoomContext.Provider value={{ rooms, featuredRooms, hasLoaded, getRoom }}>
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
