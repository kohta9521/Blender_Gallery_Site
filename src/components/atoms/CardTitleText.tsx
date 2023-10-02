import React from 'react'

// css import
import styles from './styles/CardTitle.module.scss'

// props type
type Props = {
  id: number
  title: string
}

const CardTitleText = ({ id, title }: Props) => {
  return (
    <h2 className={styles.cardText} key={id}>
      {title}
    </h2>
  )
}

export default CardTitleText
