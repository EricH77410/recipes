import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/firebase'
import Spinner from '../Spinner/withSpinner'
import Title from '../Title/Title'
import Ingredients from './Ingredients/Ingredients'
import Etapes from './Etapes/Etapes'

import './Recette-detail.style.scss'

const RecetteDetails = ({ match }) => {
  const [recette, setRecette] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    firebase.database().ref(`recettes/${match.params.id}`).once('value')
      .then( snap => {        
        setRecette(snap.val())
        setLoading(false)
      })      
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [match.params.id])

  if (isLoading) return <Spinner />
if (error) return <div>{error.message}</div>

  const { nom, categorie, ingredients, description, image, instructions } = recette  

  return (
    <div className="recette-details container">
      <Title title={nom}/>
      <img src={image} alt={nom}/>
      <p className="recette-categorie">{categorie}</p>
      <p>{description}</p>
      <div className="recette-info">
        <div className="ingredient">
          <Ingredients list={ingredients}/>
        </div>
        <div className="etape">
          <Etapes list={instructions} />
        </div>
      </div>
    </div>
  )
}

export default RecetteDetails
