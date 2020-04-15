import React from 'react'
import './Hero.style.scss'
const Hero = ({ children, hero }) => {
  return (
    <div>
      <header className="hero">
        { children }
      </header>
    </div>
  )
}

export default Hero

Hero.defaultProps = {
  hero:'defaultHero'
}