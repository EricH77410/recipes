import React from 'react'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <Hero>
      <div className="banner text-center">
        <h1>404</h1>
        <p>La page que n'éxiste pas</p>
        <Link to="/">Retour à l'acceuil</Link>
      </div>      
    </Hero>
  )
}

export default NotFound
