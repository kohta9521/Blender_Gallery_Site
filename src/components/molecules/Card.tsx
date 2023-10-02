import React from 'react'

// css import
import styles from './styles/Card.module.scss'
import CardImg from '../atoms/CardImg'

const Card = () => {
  return (
    <div className={styles.card}>
      <CardImg />
    </div>
  )
}

export default Card
