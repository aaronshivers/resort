import React, { useState } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'
import Title from './Title'

const initialState = [
  {
    icon: <FaCocktail />,
    title: 'free cocktails',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies vestibulum arcu, at pellentesque dolor viverra id.'
  }, {
    icon: <FaHiking />,
    title: 'endless hiking',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies vestibulum arcu, at pellentesque dolor viverra id.'
  }, {
    icon: <FaShuttleVan />,
    title: 'free shuttle',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies vestibulum arcu, at pellentesque dolor viverra id.'
  }, {
    icon: <FaBeer />,
    title: 'strongest beer',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies vestibulum arcu, at pellentesque dolor viverra id.'
  }
]

const Services = () => {
  const [ services ] = useState(initialState)

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {
          services && services.map((service, i) => (
            <article key={ i } className="service">
              <span>{ service.icon }</span>
              <h6>{ service.title }</h6>
              <p>{ service.info }</p>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Services
