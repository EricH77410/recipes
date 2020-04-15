import React from 'react'

import './Title.style.scss'

const Title = ({ title }) => {
  return (
    <div className="title">
      <h4>{title}</h4>
      <div />
    </div>
  )
}

export default Title