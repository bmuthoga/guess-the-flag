import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button/Button'
import './Form.css'

function Form(props) {
  const { handleSubmit, countryOptions, handleChange } = props

  return (
    <form className="options-form" onSubmit={handleSubmit}>
      {countryOptions && countryOptions.map(country => (
        <label key={country.id}>
          <input 
            type="radio" 
            name="country" 
            value={country.id}
            onChange={() => handleChange(country.id)}
          />&nbsp;
          <span>{country.name}</span>
        </label>
      ))}
      <Button
        type="submit"
        text="GUESS"
      />
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  countryOptions: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired
}

export default Form
