import React, { useEffect, useState, useContext } from 'react'
import { withRouter } from 'react-router-dom'
import firebase from '../../firebase/firebase'
import Spinner from '../Spinner/withSpinner'
import Title from '../Title/Title'
import Ingredients from './Ingredients/Ingredients'
import Etapes from './Etapes/Etapes'
import { RecetteContext } from '../../context/Provider'

import './Recette-detail.style.scss'

const RecetteDetails = ({ match, history }) => {
  const { currentUser, deleteRecipe } = useContext(RecetteContext)
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

  const removeRecette = id => {
    deleteRecipe(id)
    history.push('/')
  }

  const editRecette = id => {
    history.push(`/recette/edit/${id}`)
  }

  if (isLoading) return <Spinner />
  if (error) return <div>{error.message}</div>

  const { nom, categorie, ingredients, description, image, instructions, tempsPreparation, tempsCuisson } = recette
  const renderAdminAction = () => {
    if (currentUser && currentUser.email==="eric.hamimi@gmail.com") {
      return (
        <div className="recette-action">
          <button className="btn btn-edit" onClick={()=>editRecette(match.params.id)}>Editer</button>
          <button className="btn btn-suppr" onClick={()=>removeRecette(match.params.id)}>Supprimer</button>
        </div> 
      )
    }
  }

  return (
    <div className="recette-details container">
      <Title title={nom}/>
      <img src={image} alt={nom}/>
      <div className="recette-details-bandeau">
        <div className="recette-extras">
          <p className="recette-categorie">{categorie}</p>
          <p className="recette-preparation">Préparation: {tempsPreparation}</p>
          <p className="recette-cuisson">Cuisson: {tempsCuisson}</p>
        </div>
        <div className="action">
          { renderAdminAction() }
        </div>        
      </div>
       
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

export default withRouter(RecetteDetails)
