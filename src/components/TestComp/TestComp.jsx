import React, { useContext } from 'react'
import { RecetteContext } from '../../context/Provider'
const TestComp = () => {
  const test = useContext(RecetteContext)
  //setActiveRecette({nom:'test', description:'une recette test'})
  console.log(test)
  return (
    <div>
      TEST
    </div>
  )
}

export default TestComp
