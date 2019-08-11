import React, { createContext, useState } from 'react'

const RoomContext = createContext()

const initialState = {
  greeting: 'Hello',
  name: 'John'
}

const RoomProvider = ({ children }) => {
  const [ state ] = useState(initialState)

  return (
    <RoomContext.Provider value={ state }>
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
