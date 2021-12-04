import React from 'react'

import PropTypes from 'prop-types'

import styles from './label.module.css'

const Label = (props) => {
  return (
    <div className={styles['container']}>
      <h6 className={styles['text']}>{props.text}</h6>
    </div>
  )
}

Label.defaultProps = {
  text: 'Text',
}

Label.propTypes = {
  text: PropTypes.string,
}

export default Label
