import React from 'react'

// css import
import styles from './styles/Header.module.scss'
import HeaderLeftBox from '../molecules/HeaderLeftBox'
import HeaderRightBox from '../molecules/HeaderRightBox'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <HeaderLeftBox />
        <HeaderRightBox />
      </div>
    </div>
  )
}

export default Header
