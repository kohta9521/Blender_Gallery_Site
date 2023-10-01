import React from 'react'

// css import
import styles from './styles/Logo.module.scss'
import { a } from 'react-spring'

// props type
type Props = {
  id: number
  size?: 'small' | 'medium' | 'large' | 'xlarge'
}

const Logo = ({ id, size = 'medium' }: Props) => {
  return (
    <a className={styles.logoLink} href="/">
      <img
        className={`styles.logoImg ${styles[size]}`}
        src="/images/galleryLogo.png"
        alt="header Logo Img"
      />
    </a>
  )
}

export default Logo
