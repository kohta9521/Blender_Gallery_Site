import React from 'react'

// css import
import styles from './styles/CardsBox.module.scss'
import Card from '../molecules/Card'

// componets import

const CardBox = () => {
  return (
    <div className={styles.flexBox}>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardBox
