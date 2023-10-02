import React from 'react'

// css import
import styles from './styles/HeaderItemText.module.scss'

// props type
type Props = {
  id: number
  text: string
  link: string
  size?: 'small' | 'medium'
}

const HeaderItemText = ({ id, text, link, size = 'medium' }: Props) => {
  return (
    <div className={styles.listBox} key={id}>
      <a className={`styles.listLink ${styles[size]}`} href={link}>
        {text}
      </a>
    </div>
  )
}

export default HeaderItemText
