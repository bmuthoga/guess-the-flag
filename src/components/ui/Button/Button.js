import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button({ type, onClick, text }) {
  return (
    <button
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

Button.defaultProps = {
  onClick: null,
}

export default Button
