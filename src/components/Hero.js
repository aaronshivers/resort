import React from 'react'

const Hero = ({ children, hero='defaultHero' }) => (
  <header className={ hero }>
    { children }
  </header>
)

export default Hero
