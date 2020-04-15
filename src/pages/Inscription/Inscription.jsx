import React from 'react'

import Signin from '../../components/signin/Signin'
import Title from '../../components/Title/Title'

import './Inscription.style.scss'

const Inscription = () => {
  return (
    <div className="container mt-5">
      <Title title="Inscription / Connexion"/>
      <div className="signin row">
        <Signin />
      </div>    
    </div>
  )
}

export default Inscription
