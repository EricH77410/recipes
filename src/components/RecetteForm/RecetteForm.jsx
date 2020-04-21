import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Input from '../FormInput/FormInput'
import Title from '../Title/Title'
import firebase from '../../firebase/firebase'
import { RecetteContext } from '../../context/Provider'

function RecetteForm({ id, history }) {
  const { recettes } = useContext(RecetteContext)
  const [recette, setRecette] = useState({})
  const [editMode, setEditMode] = useState(false)

  useEffect( () => {
    if (id) {
      setEditMode(true)
      const recetteEnCours = recettes.filter(rec => rec.id === id)
      setRecette(recetteEnCours[0])
    }
  }, [id, recettes])

  const handleSubmit = e => {
    e.preventDefault()
    if (editMode) {
      console.log(recette)
      firebase.database().ref(`recettes/${id}`).update(recette)
        .catch(err => console.log(err))
        history.push('/')
      return
    }
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

  const title = editMode ? 'Edition' : "Ajouter une recette"
  const btnTxt = editMode ? 'Modifier' : 'Créer'

  return (
    <div className="recette-form">
      <Title title={title}/>
      <form onSubmit={handleSubmit}>
        <Input label="Titre" name="nom" type="text" handleChange={handleChange} value={recette.nom} required/>
        <Input label="Url de l'image" name="image" handleChange={handleChange} type="text" value={recette.image} required/>
        <Input label="Description" name="description" handleChange={handleChange} value={recette.description} type="text" />
        <Input label="Categorie" name="categorie" handleChange={handleChange} value={recette.categorie} type="text" />
        <Input label="Ingédients (séparés par une virgule)" name="ingredients" handleChange={handleChange} type
        ="text" value={recette.ingredients}/>
        <div className="form-group">
          <label>Etapes (une par ligne)</label>
          <textarea 
            className="form-control" rows="3"
            name="instructions"
            onChange={handleChange}
            value={recette.instructions}
          ></textarea>
        </div>
  <button type="submit" className="btn btn-primary">{btnTxt}</button>
      </form>
    </div>
  )
}

export default withRouter(RecetteForm)
