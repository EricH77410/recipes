import React, { useState } from 'react'
import Input from '../FormInput/FormInput'
import Title from '../Title/Title'
import firebase from '../../firebase/firebase'

function RecetteForm() {
  const [recette, setRecette] = useState({})

  const handleSubmit = e => {
    e.preventDefault()
    console.log(recette)
    firebase.database().ref('recettes').push(recette)
      .then(snap => {
        console.log(snap)
        setRecette({})
      })
      .catch(error => console.log(error))
  }

  const handleChange = e => {
    const { value, name } = e.target
    setRecette({ ...recette, [name]: value })
  }

  return (
    <div>
      <Title title="Ajouter une recette"/>
      <form onSubmit={handleSubmit}>
        <Input label="Titre" name="nom" type="text" required handleChange={handleChange} />
        <Input label="Url de l'image" name="image" handleChange={handleChange} type="text" required/>
        <Input label="Description" name="description" handleChange={handleChange} type="text" />
        <Input label="Categorie" name="categorie" handleChange={handleChange} type="text" />
        <Input label="Ingédients (séparés par une virgule)" name="ingredients" handleChange={handleChange} type
        ="text"/>
        <div className="form-group">
          <label>Etapes (une par ligne)</label>
          <textarea 
            className="form-control" rows="3"
            name="instructions"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Créer</button>
      </form>
    </div>
  )
}

export default RecetteForm
