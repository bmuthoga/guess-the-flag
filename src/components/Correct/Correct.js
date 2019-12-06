import React from 'react'
import PropTypes from 'prop-types'

function Correct({ countryName, nextButton }) {
  return (
    <>
      <p>Correct!: {countryName}</p>
      {nextButton}
    </>
  )
}

Correct.propTypes = {
  countryName: PropTypes.string.isRequired,
  nextButton: PropTypes.element.isRequired
}

export default Correct
