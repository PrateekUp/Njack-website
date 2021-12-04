import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './secondary-button.module.css'

const SecondaryButton = (props) => {
  return (
    <div className={` ${styles['container']} ${styles[props.rootClassName]} `}>
      <button
        className={` ${styles['button']} ${projectStyles['textXS']} ${projectStyles['button']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SecondaryButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton
