import React from 'react'
import Title from '../../Title/Title'

const Ingredients = ({list}) => {
  const ingredients = list.split(',')
  return (
    <>
      <Title title="ingrédients" />
      <div className="ingredient-list">
        {
          ingredients.map((ing, idx) => {
            return (
              <div key={idx}>{ing}</div>
            )
          })
        }
      </div>
    </>
  )
}

export default Ingredients
