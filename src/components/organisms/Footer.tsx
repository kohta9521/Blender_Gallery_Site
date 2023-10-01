import React from 'react'

// css import
import styles from './styles/Footer.module.scss'

// components impiort
import Logo from '../atoms/Logo'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Logo id={2} size="small" />
        footer area!
      </div>
    </div>
  )
}

export default Footer
