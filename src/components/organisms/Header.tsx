import React from 'react'

// css import
import styles from './styles/Header.module.scss'
import HeaderLeftBox from '../molecules/HeaderLeftBox'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <HeaderLeftBox />
      </div>
    </div>
  )
}

export default Header
