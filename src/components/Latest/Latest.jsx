import React, { useContext } from 'react'
import { RecetteContext } from '../../context/Provider'
import Spinner from '../Spinner/withSpinner'
import RecetteItem from '../Recette-item/Recette-item'
import Title from '../Title/Title'

const Latest = () => {
  const { latest, isLoading } = useContext(RecetteContext)

  if (isLoading) return <Spinner />
  
  return (
    <div className="latest">
      <Title title="Les dernières recettes" />
      <div className="latest-center">
        {
          latest.map(rec => <RecetteItem recette={rec} key={rec.id}/>)
        }
      </div>              
    </div>
  )
}

export default Latest

