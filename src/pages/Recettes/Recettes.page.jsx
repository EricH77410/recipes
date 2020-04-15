import React, { useContext } from 'react'
import { RecetteContext } from '../../context/Provider'
import Spinner from '../../components/Spinner/withSpinner'
import RecetteItem from '../../components/Recette-item/Recette-item'

const Recettes = () => {

  const { recettes, isLoading, selectRecette } = useContext(RecetteContext)

  if (isLoading) return <Spinner />

  return (
    <div className="latest-center recettes-page mt-5">
      {
        recettes.map(rec => {
          return <RecetteItem key={rec.id} recette={rec} onClick={()=>selectRecette(rec.id)}/>
        })
      }
    </div>
  )
}

export default Recettes
