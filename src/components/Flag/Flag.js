import React from 'react'
import PropTypes from 'prop-types'
import './Flag.css'

function Flag({ src, alt }) {
  return (
    <div className="flag-container">
      <img src={src} alt={alt} />
    </div>
  )
}

Flag.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}

export default Flag
