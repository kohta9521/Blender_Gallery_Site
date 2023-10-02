import React from 'react'

// css import
import styles from './styles/TagText.module.scss'

// props type
type Props = {
  id: number
  text: string
  link: string
}

const TagText = ({ id, text, link }: Props) => {
  return (
    <a className={styles.tag} href={link} key={id}>
      {text}
    </a>
  )
}

export default TagText
