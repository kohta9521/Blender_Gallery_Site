import React from 'react'

// css import
import styles from './styles/MainLayout.module.scss'
import { Divider } from '@chakra-ui/react'

// components import

// props type
type Props = {
  children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>{children}</div>
    </div>
  )
}

export default MainLayout
