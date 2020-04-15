import React from 'react'
import { Link } from 'react-router-dom'

import './Recette-item.style.scss'

const RecetteItem = ({recette}) => {
  const {categorie, image, nom, id } = recette
  return (
    <article className="recette-preview">
      <div className="img-container">
        <img src={image} alt="recette"/>
        <div className="categorie-top">
          <h6>{categorie}</h6>
        </div>
        <Link to={`/recettes/${id}`} className="btn-primary recette-link">Voir</Link>
      </div>
      <p className="recette-info">{nom}</p>
    </article>
  )
}

export default RecetteItem 
 