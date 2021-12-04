import React from 'react'

import PropTypes from 'prop-types'

import styles from './about-page.module.css'

const AboutPage = (props) => {
  return (
    <div className={styles['meddle-section']}>
      <h1 className={styles['text']}>{props.heading1}</h1>
      <h1 className={styles['text1']}>{props.heading}</h1>
    </div>
  )
}

AboutPage.defaultProps = {
  heading:
    'NJACK Winter of Code is for the students, who have never participated in Free or Open Source Software (FOSS) development before, to get them involved and break the ice of Open Source contributions.',
  heading1: 'Computer Science Club @ IIT Patna',
}

AboutPage.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
}

export default AboutPage
