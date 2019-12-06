import React from 'react'
import PropTypes from 'prop-types'
import Button from '../ui/Button/Button'
import Form from '../Form/Form'
import Correct from '../Correct/Correct'
import Incorrect from '../Incorrect/Incorrect'
import './TopSection.css'

function TopSection(props) {
  const {
    isAttempted,
    handleSubmit,
    countryOptions,
    handleChange,
    isCorrect,
    selectedCountry,
    handleNext
  } = props

  const nextButton = <Button
    type="button"
    text="NEXT"
    onClick={handleNext}
  />

  return (
    <div className="form-container">
      {!isAttempted &&
        <Form
          handleSubmit={handleSubmit}
          countryOptions={countryOptions}
          handleChange={handleChange} />
      }
      {isCorrect &&
        <Correct
          countryName={selectedCountry.name}
          nextButton={nextButton} />
      }
      {!isCorrect && isAttempted &&
        <Incorrect
          countryName={selectedCountry.name}
          nextButton={nextButton} />
      }
    </div>
  )
}

TopSection.propTypes = {
  isAttempted: PropTypes.bool,
  handleSubmit: PropTypes.func.isRequired,
  countryOptions: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func.isRequired,
  isCorrect: PropTypes.bool,
  selectedCountry: PropTypes.object,
  handleNext: PropTypes.func.isRequired
}

export default TopSection
