import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoomProvider } from './context/room-context'
import App from './App'
import * as serviceWorker from './serviceWorker'

render(
  <RoomProvider>
    <Router>
      <App />
    </Router>
  </RoomProvider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
