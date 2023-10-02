import React from 'react'

// css import
import styles from './styles/HeaderRightBox.module.scss'

// components import
import HeaderItemText from '../atoms/HeaderItemText'
import SearchBox from '../atoms/SearchBox'

const HeaderRightBox = () => {
  return (
    <div className={styles.rightBox}>
      <HeaderItemText id={0} text="ABOUT" link="#about" size="medium" />
      <HeaderItemText id={0} text="CONTACT" link="#contact" size="medium" />
      <SearchBox />
    </div>
  )
}

export default HeaderRightBox
