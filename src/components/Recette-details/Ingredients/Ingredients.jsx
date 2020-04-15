import React from 'react'
import Title from '../../Title/Title'

const Ingredients = ({list}) => {
  const ingredients = list.split(',')
  return (
    <div className="ingredient-list">
      <Title title="ingrédients" />
      {
        ingredients.map((ing, idx) => {
          return (
            <div key={idx}>{ing}</div>
          )
        })
      }
    </div>
  )
}

export default Ingredients
