import React from 'react'

// css import
import styles from './styles/HeaderLeftBox.module.scss'

// components import
import Logo from '../atoms/Logo'

const HeaderLeftBox = () => {
  return (
    <div className={styles.leftBox}>
      <Logo id={0} size="medium" />
    </div>
  )
}

export default HeaderLeftBox
