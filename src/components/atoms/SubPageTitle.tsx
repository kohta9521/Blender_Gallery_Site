import React from 'react'

// css import
import styles from './styles/SubPageTitle.module.scss'
import { Divider } from '@chakra-ui/react'

// props type
type Props = {
  id: number
  text: string
}

const SubPageTitle = ({ id, text }: Props) => {
  return (
    <div className={styles.pageTitle} key={id}>
      <h1 className={styles.title}>
        <span className={styles.subText}>#</span>
        {text}
      </h1>
    </div>
  )
}

export default SubPageTitle
