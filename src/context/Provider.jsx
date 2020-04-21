import React, { createContext, useState, useEffect } from 'react'
import firebase from '../firebase/firebase'

export const RecetteContext = createContext({
  recettes: [],
  latest: [],
  currentUser: null,
  isLoading: true,  
  activeRecette: null,
  login: () => {},
  logout: () => {},
  deleteRecipe: () => {}
})

const RecetteProvider = ({ children }) => {
  const [recettes, setRecettes] = useState([])
  const [latest, setLatest] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const login = user => {
    const {displayName, email} = user
    setCurrentUser({displayName, email})
  }

  const deleteRecipe = id => {
    firebase.database().ref(`recettes/${id}`).remove()    
    console.log('delete: '+id)
  }

  const logout = () => setCurrentUser(null)

  useEffect( () => {
    console.log('Provider useEffect...')
    setLoading(true)
    let recipes = []
    firebase.database().ref('recettes').on('value', (snap) => {
      snap.forEach(item => {
        recipes.push({id: item.key, ...item.val()})
      })
      setRecettes(recipes)
      setLatest(recipes.slice(recipes.length-3))
      setLoading(false)
    })
    // firebase.database().ref('recettes').once('value')
    //   .then( snap => {        
    //     snap.forEach((item) => {
    //       recipes.push({
    //         id: item.key,
    //         ...item.val()
    //       })
    //     })
    //   })
    //   .then(()=>{
    //     setRecettes(recipes)
    //     setLatest(recipes.slice(recipes.length-3))
    //     setLoading(false)
    //   })
    //   .catch(error => setError(error))
  },[setLoading, setRecettes, setLatest, currentUser])

  return (
    <RecetteContext.Provider value={{
      recettes,
      latest,
      isLoading,      
      currentUser,
      login,
      logout,
      deleteRecipe
    }}>
      {children}
    </RecetteContext.Provider>
  )
}

export default RecetteProvider
