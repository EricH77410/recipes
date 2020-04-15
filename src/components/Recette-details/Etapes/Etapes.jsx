import React from 'react'
import Title from '../../Title/Title'

const Etapes = ({list}) => {
  const etapes = list.split("\n")
  return (
    <>
    <Title title="Etapes" />
    <ol className="etapes">
      {
        etapes.map((step, idx) => {
        return <li key={idx}>{step}</li>
        })
      }
    </ol>
    </>
  )
}

export default Etapes
