import React from 'react'
import RecetteForm from '../../components/RecetteForm/RecetteForm'

const EditRecette = ({ match }) => {
  return (
    <div className="container">
      <RecetteForm id={match.params.id}/>
    </div>
  )
}

export default EditRecette