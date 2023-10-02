import React from 'react'

// css import
import styles from './styles/Card.module.scss'
import CardImg from '../atoms/CardImg'
import CardTitleText from '../atoms/CardTitleText'

const Card = () => {
  return (
    <div className={styles.card}>
      <CardImg />
      <CardTitleText id={0} title="Dark Gaming Room" />
    </div>
  )
}

export default Card
