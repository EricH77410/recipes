import React from 'react'

const FormInput = ({handleChange, label, ...otherProps}) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input 
        type="text" 
        className="form-control" 
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  )
}

export default FormInput
