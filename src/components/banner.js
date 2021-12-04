import React from 'react'

import PropTypes from 'prop-types'

import styles from './banner.module.css'

const Banner = (props) => {
  return (
    <div className={styles['container']}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className={styles['Image1']}
      />
      <img
        alt={props.image_alt2}
        src={props.image_src2}
        className={styles['image2']}
      />
    </div>
  )
}

Banner.defaultProps = {
  image_src2: '/playground_assets/njacklogo-removebg-preview-800w.png',
  image_alt2: 'image',
  image_alt: 'image',
  image_src: '/playground_assets/gray-vector.svg',
  image_src1: '/playground_assets/white-vector.svg',
  image_alt1: 'image',
}

Banner.propTypes = {
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
}

export default Banner
