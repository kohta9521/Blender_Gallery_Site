import React from 'react'

// css import
import styles from './styles/BasicPageLayout.module.scss'

// components import
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

// props type
type Props = {
  children: React.ReactNode
}

const BasicPageLayout = ({ children }: Props) => {
  return (
    <div className={styles.page}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default BasicPageLayout
