import React from 'react'
import './Home.style.scss'
import Hero from '../../components/Hero/Hero'
import Latest from '../../components/Latest/Latest'

const Home = () => {
  return (
    <>
    <Hero>
      <div className="banner">
        <h1>Rico's cooking</h1>
        <p>Carnet de recettes</p>
      </div>      
    </Hero>
    <section className="four-new">
      <Latest />
    </section>
  </>
  )
}

export default Home
