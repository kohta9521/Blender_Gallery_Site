import React from 'react'

// css import
import styles from './styles/TopText.module.scss'

// props type
type Props = {
  id: number
  text: React.ReactNode
}

const TopText = ({ id, text }: Props) => {
  return (
    <div className={styles.textBox} key={id}>
      {text}
      {/* <p className={styles.text}>
        {text}
      </p> */}
    </div>
  )
}

export default TopText
