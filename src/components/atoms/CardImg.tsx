import React from 'react'

// css import
import styles from './styles/CardImg.module.scss'

const CardImg = () => {
  return (
    <div className={styles.imgBox}>
      <img className={styles.img} src="/images/sampleImg.jpg" alt="cardImg" />
    </div>
  )
}

export default CardImg
