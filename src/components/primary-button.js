import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './primary-button.module.css'

const PrimaryButton = (props) => {
  return (
    <div className={styles['container']}>
      <button
        className={` ${styles['button']} ${projectStyles['button']} ${projectStyles['textXS']} `}
      >
        {props.button}
      </button>
    </div>
  )
}

PrimaryButton.defaultProps = {
  button: 'Button',
}

PrimaryButton.propTypes = {
  button: PropTypes.string,
}

export default PrimaryButton
