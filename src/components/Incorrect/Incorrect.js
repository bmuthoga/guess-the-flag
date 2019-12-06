import React from 'react'
import PropTypes from 'prop-types'

function Incorrect({ countryName, nextButton }) {
  return (
    <>
      <p>Incorrect! Correct Answer: {countryName}</p>
      {nextButton}
    </>
  )
}

Incorrect.propTypes = {
  countryName: PropTypes.string.isRequired,
  nextButton: PropTypes.element.isRequired
}

export default Incorrect
