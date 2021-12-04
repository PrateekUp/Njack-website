import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './cards-container.module.css'

const CardsContainer = (props) => {
  return (
    <div className={styles['CardsContainer']}>
      <div className={styles['Card1']}>
        <div className={styles['container']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon']}>
            <path d="M639.403 658.091l32 241.152-137.429-82.475c-13.269-7.851-29.995-8.363-43.904 0l-137.429 82.475 32.043-241.109c39.296 15.829 82.304 24.533 127.317 24.533s88.021-8.747 127.403-24.576zM654.165 554.283c-2.475 1.28-4.821 2.773-6.955 4.48-39.253 24.448-85.547 38.571-135.211 38.571-70.699 0-134.656-28.587-181.035-74.965s-74.965-110.336-74.965-181.035 28.587-134.656 74.965-181.035 110.336-74.965 181.035-74.965 134.656 28.587 181.035 74.965 74.965 110.336 74.965 181.035-28.587 134.656-74.965 181.035c-11.861 11.861-24.875 22.571-38.869 31.915zM304.64 612.48l-48.256 363.221c-3.115 23.339 13.312 44.8 36.693 47.915 9.984 1.323 19.669-0.939 27.563-5.717l191.36-114.816 191.403 114.816c20.224 12.117 46.421 5.589 58.539-14.635 5.205-8.661 6.955-18.389 5.717-27.563l-48.213-363.307c11.947-9.173 23.296-19.115 33.92-29.739 61.696-61.696 99.968-147.072 99.968-241.323s-38.272-179.627-99.968-241.365-147.115-99.968-241.365-99.968-179.627 38.272-241.365 99.968-99.968 147.115-99.968 241.365 38.272 179.627 99.968 241.365c10.667 10.667 22.016 20.608 33.963 29.781z"></path>
          </svg>
        </div>
        <h6 className={` ${styles['text']} ${projectStyles['textXL']} `}>
          {props.heading5}
        </h6>
        <span className={styles['text1']}>{props.text}</span>
      </div>
      <div className={styles['Card2']}>
        <div className={styles['container1']}>
          <svg viewBox="0 0 1097.142857142857 1024" className={styles['icon2']}>
            <path d="M731.429 859.429c0 9.714-8.571 18.286-18.286 18.286h-548.571c-21.143 0-18.286-22.286-18.286-36.571v-329.143h-109.714c-20 0-36.571-16.571-36.571-36.571 0-8.571 2.857-17.143 8.571-23.429l182.857-219.429c6.857-8 17.143-12.571 28-12.571s21.143 4.571 28 12.571l182.857 219.429c5.714 6.286 8.571 14.857 8.571 23.429 0 20-16.571 36.571-36.571 36.571h-109.714v219.429h329.143c5.143 0 10.857 2.286 14.286 6.286l91.429 109.714c2.286 3.429 4 8 4 12zM1097.143 621.714c0 8.571-2.857 17.143-8.571 23.429l-182.857 219.429c-6.857 8-17.143 13.143-28 13.143s-21.143-5.143-28-13.143l-182.857-219.429c-5.714-6.286-8.571-14.857-8.571-23.429 0-20 16.571-36.571 36.571-36.571h109.714v-219.429h-329.143c-5.143 0-10.857-2.286-14.286-6.857l-91.429-109.714c-2.286-2.857-4-7.429-4-11.429 0-9.714 8.571-18.286 18.286-18.286h548.571c21.143 0 18.286 22.286 18.286 36.571v329.143h109.714c20 0 36.571 16.571 36.571 36.571z"></path>
          </svg>
        </div>
        <h6 className={` ${styles['text2']} ${projectStyles['textXL']} `}>
          {props.heading6}
        </h6>
        <span className={styles['text3']}>{props.text1}</span>
      </div>
      <div className={styles['Card3']}>
        <div className={styles['container2']}>
          <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
            <path d="M636 938h-6q-92-24-158-90-38-38-65-103t-27-119q0-52 38-89t92-37 93 37 39 89q0 34 25 58t63 24 64-24 26-58q0-120-91-206t-219-86q-92 0-168 47t-114 125q-24 50-24 120 0 80 28 154 6 20-14 26t-26-12q-32-82-32-168 0-78 30-138 42-90 129-144t191-54q146 0 249 99t103 237q0 52-39 88t-93 36-92-36-38-88q0-34-26-59t-64-25-63 25-25 59q0 112 80 192 56 56 140 78 18 2 14 26-4 16-20 16zM530 626q0 74 55 128t137 54q4 0 18-2t23-2 18 3 11 13q4 22-18 26-24 4-52 4-80 0-132-38-102-70-102-186 0-22 22-22 20 0 20 22zM416 930q-8 0-14-6-54-54-86-114-46-80-46-184 0-94 71-162t171-68 171 68 71 162q0 20-22 20t-22-20q0-78-58-133t-140-55-140 55-58 133q0 96 38 164 26 46 80 104 16 14 0 30-6 6-16 6zM150 414q-22 0-22-20 0-4 4-12 64-92 160-140 100-52 220-52t220 52q98 48 160 138 4 8 4 12 0 14-16 20t-24-8q-60-82-144-124-92-46-200-47t-200 47q-90 46-146 126-6 8-16 8zM760 190q-8 0-10-2-118-60-238-60-130 0-238 60-10 6-20 0t-10-18q0-14 10-20 116-64 258-64 130 0 258 64 18 10 8 28-8 12-18 12z"></path>
          </svg>
        </div>
        <h6 className={` ${styles['text4']} ${projectStyles['textXL']} `}>
          {props.heading7}
        </h6>
        <span className={styles['text5']}>{props.text2}</span>
      </div>
    </div>
  )
}

CardsContainer.defaultProps = {
  text2:
    'Write a few lines about each one. A paragraph describing a feature will be enough. Keep you user engaged!',
  text: 'Divide details about your product or agency work into parts. A paragraph describing a feature will be enough.',
  heading7: 'Verified Company',
  heading5: 'Awarded Agency',
  heading6: 'Free Revisions',
  text1:
    'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.\n\n',
}

CardsContainer.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  heading7: PropTypes.string,
  heading5: PropTypes.string,
  heading6: PropTypes.string,
  text1: PropTypes.string,
}

export default CardsContainer
