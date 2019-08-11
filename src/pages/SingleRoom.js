import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RoomContext } from '../context/room-context'
import defaultBkgd from '../images/room-1.jpeg'
import Banner from '../components/Banner'
import StyledHero from '../components/StyledHero'

const SingleRoom = ({ match: { params: { slug } } }) => {
  const { room, getRoom } = useContext(RoomContext)

  useEffect(() => getRoom(slug), [])

  const error = () => (
    <div className="error">
      <h3>that room was not found...</h3>
      <Link to="/rooms" className="btn-primary">
        rooms
      </Link>
    </div>
  )

  const success = ({ name, description, capacity, size, price, extras, breakfast, pets, images }) => {

    if (images) {
      const [ mainImage, ...otherImages ] = images

      return (
        <>
          <StyledHero background={ mainImage || defaultBkgd }>
            <Banner title={ `${ name } room` }>
              <Link to="/rooms" className="btn-primary">
                Rooms
              </Link>
            </Banner>
          </StyledHero>
          <section className="single-room">
            <div className="single-room-images">
              {
                otherImages.map((image, i) => (
                  <img key={ i } src={ image } alt={ name } />
                ))
              }
            </div>
            <div className="single-room-info">
              <article className="desc">
                <h3>details</h3>
                <p>{ description }</p>
              </article>
              <article className="info">
                <h3>info</h3>
                <h6>price: ${ price }</h6>
                <h6>size: { size } SQFT</h6>
                <h6>max capacity: {
                    capacity > 1 ? `${ capacity } people` : `${ capacity } person`
                  }
                </h6>
                <h6>{ pets ? `pets allowed` : `no pets allowed` }</h6>
                <h6>{ breakfast && 'free breakfast included' }</h6>
              </article>
            </div>
          </section>
          <section className="room-extras">
            <h6>extras</h6>
            <ul className="extras">
              {
                extras.map((item, i) => (
                  <li key={ i }>- { item }</li>
                ))
              }
            </ul>
          </section>
        </>
      )
    }
  }

  return success(room) || error()
}

export default SingleRoom
