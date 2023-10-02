import React from 'react'

// css import
import styles from './styles/BasicPageLayout.module.scss'

// components import
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import Contact from '../organisms/Contact'

// props type
type Props = {
  children: React.ReactNode
}

const BasicPageLayout = ({ children }: Props) => {
  return (
    <div className={styles.page}>
      <Header />
      {children}
      <Contact />
      <Footer />
    </div>
  )
}

export default BasicPageLayout
