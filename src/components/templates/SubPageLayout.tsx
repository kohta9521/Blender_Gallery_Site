import React from 'react'

// css import
import styles from './styles/SubPageLayout.module.scss'

// components import
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

// props type
type Props = {
  id: number
  children: React.ReactNode
}

const SubPageLayout = ({ id, children }: Props) => {
  return (
    <div className={styles.subPage} key={id}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default SubPageLayout
