import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './service-card.module.css'

const ServiceCard = (props) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container1']}>
        <svg viewBox="0 0 1024 1024" className={styles['icon']}>
          <path d="M512 86q124 0 211 87t87 211q0 150-128 244v98q0 18-12 30t-30 12h-256q-18 0-30-12t-12-30v-98q-128-88-128-244 0-124 87-211t211-87zM384 896v-42h256v42q0 18-12 30t-30 12h-172q-18 0-30-12t-12-30z"></path>
        </svg>
      </div>
      <h1 className={` ${styles['text']} ${projectStyles['textXL']} `}>
        {props.heading}
      </h1>
      <span className={styles['text1']}>{props.text}</span>
    </div>
  )
}

ServiceCard.defaultProps = {
  text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  heading: 'Excelent services',
}

ServiceCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default ServiceCard
