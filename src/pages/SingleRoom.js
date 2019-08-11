import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context/room-context'
import defaultBkgd from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

const SingleRoom = ({ match }) => {
  const { room, getRoom } = useContext(RoomContext)
  // const [ slug, setSlug ] = useState('')

  useEffect(() => getRoom(match.params.slug), [])

  const error = () => (
    <div className="error">
      <h3>that room was not found...</h3>
      <Link to="/rooms" className="btn-primary">
        rooms
      </Link>
    </div>
  )

  const success = ({ name, description, capacity, size, priced, extras, breakfast, pets, images }) => {

    return (
      <Hero hero="roomsHero">
        <Banner title={ `${ name } room` }>
          <Link to="/rooms" className="btn-primary">
            Rooms
          </Link>
        </Banner>
      </Hero>
    )
  }

  return room ? success(room) : error()
}

export default SingleRoom
