import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import ErrorPage from './pages/ErrorPage'
import Navigation from './components/Navigation'
import './App.css'

const App = () => {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/rooms" exact component={ Rooms } />
        <Route path="/rooms/:slug" component={ SingleRoom } />
        <Route component={ ErrorPage } />
      </Switch>
    </>
  )
}

export default App
